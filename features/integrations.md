# Integrations

> Third-party services connected to Luma.

---

## Cronofy — Calendar Sync

**Available on:** Mobile, Web

Bi-directional calendar synchronization via Cronofy.

| Feature | Description |
|---------|-------------|
| Supported calendars | Google Calendar, Microsoft Outlook, Apple iCal |
| Sync direction | Bi-directional — events sync both ways |
| OAuth connection | Secure OAuth flow to connect calendars |
| Multiple calendars | Connect multiple calendar accounts |
| Export calendar | Choose which Luma calendar to export to |
| Conflict detection | Flags scheduling conflicts between calendars |
| Conflict resolution | UI for resolving detected conflicts |
| Manual sync | Trigger sync on demand |
| Auto-sync | Background sync at regular intervals |

**Use case:** Field workers see their personal and work calendars in one place. Luma can detect calendar events that don't have time entries logged, and nudge the user to track their time.

---

## Fortnox — Accounting

**Available on:** Web (backend integration)

Integration with Sweden's most popular accounting system for small businesses.

| Feature | Description |
|---------|-------------|
| Customer sync | Sync customers between Luma and Fortnox |
| Invoice push | Send invoices from Luma to Fortnox |
| Article sync | Sync materials/articles |
| Read-only mode | Safe mode during pilot — view Fortnox data without writing |
| Full sync mode | Bi-directional sync when ready |

**Use case:** Tradespeople don't need to learn Fortnox. They do their work in Luma, and everything syncs to accounting automatically. Their accountant sees the data in Fortnox as usual.

---

## Klarpris — Material Pricing

**Available on:** Web

Integration with Klarpris for material price lookup.

| Feature | Description |
|---------|-------------|
| Material search | Search Klarpris catalog from within Luma |
| Price lookup | Get current pricing for materials |
| Import to catalog | Import materials into Luma's material catalog |
| Favorites | Save frequently used materials for quick access |

**Use case:** When adding materials to a job, users can search Klarpris for accurate pricing instead of guessing or looking up old quotes.

---

## Stripe — Payments

**Available on:** Web

Online payment processing via Stripe.

| Feature | Description |
|---------|-------------|
| Payment links | Generate payment links for invoices |
| Payment intent | Create Stripe payment intents |
| Webhook handling | Automatic payment confirmation via Stripe webhooks |

**Use case:** Customers can pay invoices online. Payment is automatically matched to the invoice.

---

## Roaring — Swedish Business Lookup

**Available on:** Mobile, Web

Swedish company and person data lookup.

| Feature | Description |
|---------|-------------|
| Company lookup | Search by organisation number or company name |
| Auto-fill | Automatically populate company name, address, and details |
| Person lookup | Verify personnummer for private customers |

**Use case:** When creating a customer, enter an organisation number and Luma fills in the rest from Bolagsverket data.

---

## Better Auth — Authentication

Self-hosted authentication with EU data residency.

| Feature | Description |
|---------|-------------|
| Email/password login | Standard authentication |
| Email verification | Verify email addresses |
| Password reset | Self-service password recovery |
| Session management | Secure session handling |
| Multi-organization | Switch between organizations |
| Team invitations | Email-based team invites |
| EU data residency | All auth data stored in Sweden |

**Why this matters:** Unlike US-based auth providers (Auth0, Clerk), all authentication data stays in the EU. No transatlantic data transfers. Full GDPR compliance.

---

## SendGrid — Email

Email delivery for transactional messages.

| Feature | Description |
|---------|-------------|
| Invoice delivery | Send invoices to customers via email |
| Team invitations | Send invitation emails |
| Password reset | Deliver reset links |
| Graceful fallback | System continues working if email is temporarily unavailable |

---

## Infrastructure Integrations

| Service | Purpose |
|---------|---------|
| Sentry | Error tracking and crash reporting |
| Datadog | Performance monitoring (mobile) |
| Azure Key Vault | Secret management |
| Confluent Cloud (Kafka) | Event streaming between services |

---

## Integration Architecture

```
                    ┌─────────────┐
                    │   Luma API   │
                    │  (GraphQL)   │
                    └──────┬──────┘
                           │
        ┌──────────┬───────┼───────┬──────────┐
        │          │       │       │          │
   ┌────▼───┐ ┌───▼──┐ ┌──▼──┐ ┌──▼──┐ ┌────▼────┐
   │Cronofy │ │Fortnox│ │Klarp│ │Stripe│ │Roaring  │
   │Calendar│ │Acctng │ │ris  │ │Pay  │ │Business │
   └────────┘ └──────┘ └─────┘ └─────┘ └─────────┘
```

All integrations are server-side (backend). Mobile and web clients never communicate directly with third-party services — everything goes through the Luma API for security and audit logging.
