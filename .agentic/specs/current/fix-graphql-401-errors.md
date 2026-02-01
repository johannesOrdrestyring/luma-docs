# Plan: Fix GraphQL 401 Errors After Login

**Created:** 2026-01-30
**Domain:** Auth / API
**Status:** Implemented

## Summary

Fix 401 Unauthorized errors from GraphQL endpoint (`/api/graphql`) after successful login. The issue is that `getToken()` in the auth client returns `session.session.token` but this value is `undefined` because Better Auth stores the session token in cookies, not in the session object returned by `useSession()`.

## Context

Users can successfully log in to `app.luma.aceve.cloud` but subsequent GraphQL requests fail with 401. The auth flow is:

1. User logs in via Better Auth
2. Apollo Client calls `getToken()` before each request
3. Token is sent as `Authorization: Bearer <token>` header
4. Backend middleware validates token by looking up session in database

The problem: `getToken()` returns `null` because `session.session.token` is not populated by Better Auth's `useSession()` hook. Better Auth uses HTTP-only cookies for session management, not JWT tokens in the session object.

## Root Cause Analysis

**File: `/repos/helix-web/lib/auth-client.ts` (lines 87-91)**
```typescript
getToken: async () => {
  // Better Auth uses session tokens from cookies
  // For API calls, the session is automatically included
  return session?.session?.token || null;  // <-- ALWAYS NULL!
},
```

The comment is correct - Better Auth uses cookies - but the code tries to return a token anyway, which doesn't exist in the session object.

**Backend expects tokens: `/repos/helix-backend/services/api-gateway/src/auth/better-auth.middleware.ts`**
```typescript
// Extract JWT token from Authorization header
const token = this.extractToken(req);
if (!token) {
  throw new UnauthorizedException('Authentication required');
}
```

The middleware expects a Bearer token, but the frontend isn't sending one.

## Approach

There are two valid approaches:

### Option A: Cookie-Based Auth (Recommended)
Change the backend to also validate sessions from cookies (which Better Auth already handles), while keeping Bearer token support for mobile apps.

### Option B: Generate Real Tokens
Have the frontend fetch a session token from a dedicated endpoint that returns the actual session token from the database.

**Recommendation:** Option A is simpler and follows Better Auth's design. Cookies are already forwarded by the proxy, we just need the backend to check them too.

## Implementation Steps

### Step 1: Update Backend Middleware to Support Cookies

**Files:** `/repos/helix-backend/services/api-gateway/src/auth/better-auth.middleware.ts`

**Changes:**
1. Modify `extractToken()` to also check for session cookie
2. If no Bearer token, check for `better_auth_session` cookie
3. Cookie token validation uses same `validateSession()` method

**Validation:** Backend logs show session validated from cookie

### Step 2: Ensure Cookies Are Forwarded in Proxy

**Files:** `/repos/helix-web/app/api/graphql/route.ts`

**Changes:** Already correctly forwards cookies (line 29-32). No changes needed.

### Step 3: Update Apollo Client to Include Credentials

**Files:** `/repos/helix-web/lib/apollo-client.tsx`

**Changes:**
1. Add `credentials: 'include'` to HttpLink so cookies are sent
2. Update authLink to not require a token if cookies are present

**Validation:** Network tab shows cookies being sent with GraphQL requests

### Step 4: Fix getToken() for Mobile Compatibility

**Files:** `/repos/helix-web/lib/auth-client.ts`

**Changes:**
1. Remove the misleading `getToken()` that returns null
2. Add a proper `getToken()` that fetches from `/api/auth/get-session` endpoint
3. For mobile apps, they will use this endpoint to get a token

**Validation:** Mobile app can authenticate via Bearer token

## Files Affected

- [x] `/repos/helix-backend/services/api-gateway/src/auth/better-auth.middleware.ts` - Add cookie extraction ✅
- [x] `/repos/helix-web/lib/apollo-client.tsx` - Add credentials: 'include' ✅
- [ ] `/repos/helix-web/lib/auth-client.ts` - Fix getToken() (optional, for mobile - not needed for web fix)

## Risks & Mitigations

- **Risk:** CSRF attacks with cookie-based auth
  **Mitigation:** GraphQL mutations already use POST, and the proxy is same-origin. Consider adding CSRF token for extra security.

- **Risk:** Breaking mobile app auth
  **Mitigation:** Keep Bearer token support, mobile will fetch token from dedicated endpoint

## Testing Strategy

1. Log in to `app.luma.aceve.cloud`
2. Check Network tab - GraphQL requests should include cookies
3. Verify GraphQL queries return data (not 401)
4. Test logout and re-login flow

## Rollback Plan

1. Revert middleware changes to require Bearer token only
2. Frontend will need a token-fetching mechanism added later
