# Pilot Features

> Everything included in the Luma pilot — February 2026.

---

## At a Glance

Luma is available as a **mobile app** (iOS) and a **web dashboard**. Both connect to the same backend and share data in real time.

| Area | Mobile | Web | Description |
|------|:------:|:---:|-------------|
| [Core Workflows](./workflows) | :white_check_mark: | :white_check_mark: | 5 event-driven flows: Did a Job, Got Paid, Bought Something, Need to Remember, Help Me |
| [Job Management](./mobile#jobs) | :white_check_mark: | :white_check_mark: | Create, track, and complete jobs with status pipeline |
| [Time Tracking](./mobile#time-tracking) | :white_check_mark: | :white_check_mark: | Timer with native OS integration, manual entry, history |
| [Invoicing](./mobile#invoicing) | :white_check_mark: | :white_check_mark: | Generate invoices from jobs, AI pricing analysis, send to customer |
| [Customers](./mobile#customers) | :white_check_mark: | :white_check_mark: | Customer database with Swedish company lookup |
| [Calendar](./mobile#calendar) | :white_check_mark: | :white_check_mark: | Schedule view with Cronofy sync (Google, Outlook, iCal) |
| [Documents](./mobile#documents) | :white_check_mark: | :white_check_mark: | Upload, OCR, AI categorization, smart folders |
| [Materials](./web#materials--stock) | | :white_check_mark: | Material catalog, stock levels, Klarpris pricing |
| [Reports](./web#reports) | | :white_check_mark: | P&L, AR Aging, Time Summary, Material Usage |
| [Quality Inspections](./web#quality-management) | | :white_check_mark: | Checklists, inspections, schema builder |
| [AI Features](./ai) | :white_check_mark: | :white_check_mark: | Voice agent, invoice AI, copilot, business suggestions |
| [Team Management](./web#team-management) | :white_check_mark: | :white_check_mark: | Invite members, roles, team overview |
| [Integrations](./integrations) | :white_check_mark: | :white_check_mark: | Cronofy, Fortnox, Klarpris, Stripe |

---

## Platform Summary

### Mobile App

Built with Expo (React Native). Designed for field workers — one hand, few taps, works offline.

**Key highlights:**
- Offline-first with automatic sync
- Voice agent (Swedish) for hands-free input
- Native timer that persists when app is backgrounded
- Receipt capture with OCR
- GPS tracking for automatic job detection
- Dark mode support
- Push notifications

[View all mobile features &rarr;](./mobile)

---

### Web Dashboard

Built with Next.js 15. Designed for office use — overview, reporting, and bulk operations.

**Key highlights:**
- AG Grid data tables with server-side pagination
- Bryntum Calendar with drag-and-drop scheduling
- AI Copilot sidebar for business guidance
- Command palette with keyboard shortcuts
- Quality inspection workflows
- Financial reports
- Data import from other systems
- Dark mode support

[View all web features &rarr;](./web)

---

## Architecture

| Layer | Technology |
|-------|------------|
| Mobile | Expo 54 + React Native |
| Web | Next.js 15 + shadcn/ui |
| API | GraphQL (NestJS) |
| Database | PostgreSQL 16 |
| Auth | Better Auth (EU data residency) |
| Hosting | Azure Sweden Central |
| AI | Anthropic Claude + OpenAI |

All data stored in the EU (Sweden). GDPR compliant. Self-hosted authentication — no US data transfers.

---

## Navigation

- [Mobile Features](./mobile) — Screens and capabilities
- [Web Features](./web) — Dashboard and tools
- [Core Workflows](./workflows) — The 5 core flows
- [AI Capabilities](./ai) — Voice agent, invoice AI, copilot
- [Integrations](./integrations) — Third-party connections
