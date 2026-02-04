# Plan: Mobile Login Screen Branding Fix

**Created:** 2026-02-03
**Domain:** mobile, UI
**Status:** Draft

## Summary

Fix the Luma mobile login screen by adding the Aceve logo mark with "Luma" text, and fixing the "Get started" link alignment to be on its own line below "Don't have an account?".

## Context

Looking at the screenshot provided:
1. Currently shows only text "Luma" without the Aceve angular logo mark
2. "Don't have an account? Get started" is on one line with misaligned text (link is inline with Pressable causing baseline issues)

The Aceve logo is an angular symbol (two paths forming a stylized checkmark/angular shape) that should appear alongside the "Luma" text branding.

## Current State

**login.tsx** structure:
```jsx
<View style={styles.header}>
  <Text style={styles.logoText}>Luma</Text>
  <Text style={styles.tagline}>Less admin. More life.</Text>
</View>
```

**Footer issue:**
```jsx
<Text style={styles.footerText}>
  Don't have an account?{' '}
  <Pressable onPress={...}>           // Inline Pressable breaks baseline
    <Text style={styles.footerLink}>Get started</Text>
  </Pressable>
</Text>
```

## Approach

### Step 1: Create LumaLogo Component

Create a reusable logo component that combines the Aceve mark with "Luma" text.

- **File:** `src/components/ui/LumaLogo.tsx` (NEW)
- **Changes:**
  - SVG component using `react-native-svg` for the Aceve angular mark
  - Horizontal layout: Logo mark + "Luma" text
  - Configurable size prop
- **Validation:** Component renders in Storybook/test

### Step 2: Update Login Screen Header

Replace the text-only "Luma" with the new LumaLogo component.

- **File:** `src/app/(auth)/login.tsx`
- **Changes:**
  - Import `LumaLogo` component
  - Replace `<Text style={styles.logoText}>Luma</Text>` with `<LumaLogo size={48} />`
  - Adjust header styles if needed for centering
- **Validation:** Logo displays correctly on login screen

### Step 3: Fix Footer Alignment

Fix the "Get started" link alignment by putting it on its own line.

- **File:** `src/app/(auth)/login.tsx`
- **Changes:**
  - Restructure footer to stack text and link vertically:
    ```jsx
    <View style={styles.footer}>
      <Text style={styles.footerText}>Don't have an account?</Text>
      <Pressable onPress={() => router.push('/(auth)/signup')}>
        <Text style={styles.footerLink}>Get started</Text>
      </Pressable>
    </View>
    ```
  - Update `footer` style to use `gap` for spacing
  - Remove inline Pressable from within Text component
- **Validation:** Footer text is properly aligned with link below

## Files Affected

| File | Changes |
|------|---------|
| `src/components/ui/LumaLogo.tsx` | **NEW** - Reusable logo component |
| `src/components/ui/index.ts` | Export LumaLogo (if exists) |
| `src/app/(auth)/login.tsx` | Import logo, restructure footer |

## Logo Component Design

```tsx
// Aceve mark SVG paths (from helix-web/components/ui/aceve-logo.tsx)
<Svg viewBox="0 0 141 111">
  <Path d="M15.9557 110.527H0.417969L118.074 3.11848C120.013..." fill={color} />
  <Path d="M121.658 110.527H109.81C107.497 110.527 105.625..." fill={color} />
</Svg>
```

Layout: `[Aceve Mark] [Luma Text]` horizontally centered

## Visual Reference

**Before:**
```
            Luma
    Less admin. More life.

    [Email input]
    [Password input]
    [Login button]

  Don't have an account? Get started
                         ↑ misaligned
```

**After:**
```
        [✓ Luma]          ← logo mark + text
    Less admin. More life.

    [Email input]
    [Password input]
    [Login button]

    Don't have an account?
        Get started       ← on its own line
```

## Dependencies

- `react-native-svg` - Already installed (used throughout app)

## Testing Strategy

1. Visual inspection on iOS simulator
2. Test both light and dark mode (if supported)
3. Verify touch targets on "Get started" link
4. Test navigation to signup screen

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| SVG rendering issues | Use tested Aceve paths from helix-web |
| Logo too small/large | Make `size` prop configurable |
| Color contrast | Use `colors.primary[500]` for brand consistency |

## Rollback Plan

Revert to text-only "Luma" if logo causes issues (simple git revert).
