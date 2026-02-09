# Mobile App Features

> iOS app built with Expo. Designed for tradespeople in the field.

---

## My Day (Home)

The main screen — a daily briefing of what matters.

| Feature | Description |
|---------|-------------|
| Today's jobs | Scheduled jobs for the day with quick-start buttons |
| Ready to invoice | Nudge card showing completed jobs that haven't been invoiced yet |
| Reminders | Active reminders with completion tracking |
| Quick actions | Shortcut buttons: Expense, Payment, Reminder, Help |
| Stats cards | Time logged today, pending invoices |
| Active timer | Shows running timer with job name |
| Location status | GPS tracking indicator |

---

## Jobs

Full job lifecycle from creation to completion.

| Feature | Description |
|---------|-------------|
| Jobs list | Filterable and sortable job list |
| Job detail | Full view with status, timeline, materials, time entries |
| Create job | Multi-step wizard: customer, description, duration, materials |
| Quick create | Minimal-field job creation for speed |
| Status pipeline | Visual status progression with change tracking |
| Materials list | Materials used on the job with costs |
| Time entries | Hours logged against the job |
| Edit job | Update any job details after creation |

---

## Calendar

Schedule view with external calendar sync.

| Feature | Description |
|---------|-------------|
| Month view | Monthly calendar with event dots |
| Week view | Weekly schedule with time blocks |
| Day view | Detailed daily timeline |
| Cronofy sync | Bi-directional sync with Google Calendar, Outlook, iCal |
| Source indicators | See which calendar an event came from |
| Sync status | Badge showing sync state |
| Team timeline | View team members' schedules |
| Event editing | Create, update, and delete events |
| Conflict detection | Flag scheduling conflicts |

---

## Time Tracking

Timer and time entry management.

| Feature | Description |
|---------|-------------|
| Native timer | Persists when app is backgrounded (OS-level integration) |
| Pause types | Break, lunch, and custom pause categories |
| Timer controls | Start, stop, pause with visual display |
| Job selection | Associate timer with a specific job |
| Manual entry | Add time entries after the fact |
| History | Browse past time entries with date filters |
| Billable tracking | Mark hours as billable or non-billable |

---

## Invoicing

Generate and send invoices directly from completed jobs.

| Feature | Description |
|---------|-------------|
| Invoice list | All invoices with status filtering (draft, sent, paid, overdue) |
| Generate from job | One-tap invoice creation from a completed work order |
| Draft builder | Add/edit line items, adjust quantities and prices |
| AI pricing analysis | Margin analysis, pricing suggestions, profit optimization |
| AI description improvement | Auto-improve line item descriptions |
| Invoice preview | Full PDF preview in-app (WebView) |
| Send invoice | Send to customer via email |
| Record payment | Mark invoices as paid |
| Country-specific tax | Automatic Moms/MVA/MwSt/VAT labels by country |

---

## Customers

Customer database with Swedish company lookup.

| Feature | Description |
|---------|-------------|
| Customer list | Search and browse all customers |
| Create customer | Form with company/private toggle |
| Swedish company lookup | Auto-fill from Bolagsverket (organisationsnummer) |
| Address management | Full address form with country support |
| Customer types | Company and private person distinction |
| Customer picker | Quick selection when creating jobs or invoices |

---

## Documents

Document management with AI-powered processing.

| Feature | Description |
|---------|-------------|
| Document library | Grid view of all uploaded documents |
| Camera capture | Take photos directly from the app |
| OCR processing | Extract text from receipts and documents |
| AI categorization | Auto-tag documents (receipts, invoices, contracts, photos) |
| Smart folders | AI-organized document grouping |
| Share links | Generate share links for documents |
| Job linking | Associate documents with specific jobs |

---

## Core Flows (Quick Actions)

Five event-driven flows accessible from the main FAB button.

| Flow | Purpose |
|------|---------|
| [Did a Job](./workflows#did-a-job) | Quick job completion with time and materials |
| [Got Paid](./workflows#got-paid) | Record payment against an invoice |
| [Bought Something](./workflows#bought-something) | Receipt capture and expense logging |
| [Need to Remember](./workflows#need-to-remember) | Create a reminder with optional job link |
| [Help Me](./workflows#help-me) | AI-powered next-step suggestions |

---

## Voice Agent

AI voice assistant accessible via long-press on the FAB button.

| Feature | Description |
|---------|-------------|
| Swedish language | Full conversation in Swedish |
| Voice commands | Create customers, jobs, time entries, and reminders by speaking |
| Chat interface | Full-screen bottom sheet with chat bubbles |
| Text-to-speech | Luma reads responses aloud |
| Multi-turn conversation | Maintains context across messages |

[More about AI capabilities &rarr;](./ai)

---

## Receipt Capture

Standalone receipt scanning workflow.

| Feature | Description |
|---------|-------------|
| Camera capture | Take photo of receipt |
| OCR extraction | Extract text, vendor, amount, VAT |
| AI categorization | Auto-categorize the expense |
| Job association | Link expense to a specific job |

---

## Settings

App configuration and preferences.

| Setting | Description |
|---------|-------------|
| Profile editing | Name, avatar, contact info |
| Calendar connections | Manage connected calendars (Google, Outlook, iCal) |
| GPS tracking | Enable/disable location tracking |
| Notifications | Push notification preferences |
| Voice agent | Voice assistant configuration |
| Offline mode | View offline sync status and queue |
| Team | View team members |
| Invite member | Send team invitations |
| About | App version and info |

---

## Technical Capabilities

| Capability | Description |
|------------|-------------|
| Offline-first | Full functionality without internet, syncs when connected |
| GPS tracking | Automatic job detection based on location |
| Geofencing | Location-based reminders and triggers |
| Push notifications | Timer alerts, reminders, payment received |
| Biometric auth | Face ID / Touch ID support |
| Dark mode | Full dark mode with automatic system detection |
| Multi-tenant | Organization switching for users in multiple companies |
| Performance monitoring | Datadog RUM integration |
| Error tracking | Sentry crash reporting |
| i18n | Swedish and English language support |
