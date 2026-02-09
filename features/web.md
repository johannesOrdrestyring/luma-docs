# Web Dashboard Features

> Next.js 15 web application. Designed for office work — overview, reporting, and management.

---

## Dashboard

Central hub with daily overview and quick actions.

| Feature | Description |
|---------|-------------|
| Today's jobs | Scheduled jobs with start/directions buttons |
| Time summary | Progress bar for hours logged today |
| Attention items | Overdue invoices, pending approvals, unscheduled jobs |
| Quick actions | New Job, Add Customer, Log Time buttons |
| Speed dial FAB | Floating action button for rapid access |
| AI suggestions | Luma AI banner with business recommendations |

---

## Work Orders (Jobs)

Full job management with advanced data grid.

| Feature | Description |
|---------|-------------|
| AG Grid table | Production-grade data grid with infinite scroll |
| Server-side pagination | Handles thousands of work orders efficiently |
| Real-time search | Search across all fields |
| Smart filters | Filter by status, priority, customer, date |
| Column visibility | Toggle columns on/off |
| Density controls | Comfortable, standard, and compact row heights |
| Copy to clipboard | Quick copy of order numbers |
| Job detail view | Full overview with financials, materials, hours, team |
| AI Project Blueprint | Financial intelligence panel per job |
| Status pipeline | Visual status progression |
| Scheduling widget | Assign dates and team members |
| Materials tracking | Add, edit, remove materials with costs |
| Hours tracking | View time entries and labor costs |
| Documents | Files linked to the work order |

---

## Calendar & Scheduling

Advanced scheduling with Bryntum Calendar.

| Feature | Description |
|---------|-------------|
| Multiple views | Day, week, month, resource, agenda, and year views |
| Resource scheduling | View and manage team members' schedules |
| Drag and drop | Reschedule events by dragging |
| Event resizing | Change duration by resizing |
| Event creation | Click to create new events |
| External calendar sync | Cronofy integration (Google, Outlook, iCal) |
| Calendar source filtering | Show/hide calendars by source |
| Conflict detection | Flag overlapping events |
| Conflict resolution | Review and resolve scheduling conflicts |
| Manual sync | Trigger calendar sync on demand |
| Hide weekends | Toggle weekend visibility |
| Sidebar toggle | Show/hide calendar source panel |
| View persistence | Remembers your preferred view |

---

## Time Tracking

Timer and time entry management.

| Feature | Description |
|---------|-------------|
| AG Grid table | Time entries with filtering and search |
| Start timer | One-click timer start |
| Active timer widget | Visual indicator of running timer |
| Manual entry | Add time entries with dialog form |
| Overtime alerts | Notification for excessive hours |
| Billable tracking | Mark hours as billable/non-billable |
| Time approval | Approval workflow for team hours |

---

## Customers

Customer relationship management.

| Feature | Description |
|---------|-------------|
| AG Grid table | Customer list with infinite scroll |
| Real-time search | Search across all customer fields |
| Create/edit dialogs | Full customer form with validation |
| Customer detail | Full view with jobs, invoices, and contact info |
| Column visibility | Toggle and reorder columns |
| Address management | Multi-address support |

---

## Invoicing

Full invoicing workflow with AI assistance.

| Feature | Description |
|---------|-------------|
| Invoice list | AG Grid with status filtering |
| Generate from job | Auto-create invoice from work order data |
| Draft builder | Add/edit/remove line items |
| Fetch materials | Pull billable materials into draft |
| Fetch hours | Pull billable time entries into draft |
| AI pricing analysis | Margin analysis and pricing suggestions |
| AI description improvement | Auto-improve line item wording |
| Invoice preview | HTML template rendering with print-ready layout |
| Send invoice | Email delivery to customer |
| Record payment | Mark invoices as paid |
| Payment tracking | Track payment status across invoices |
| Invoice analytics | Analytics dashboard for invoice metrics |
| Stripe integration | Online payment via Stripe payment links |
| Country-specific tax | Moms/MVA/MwSt/VAT labels by country |

---

## Finance

Financial overview dashboard.

| Feature | Description |
|---------|-------------|
| Total outstanding | Aggregate unpaid invoice amount |
| Overdue invoices | Amount overdue and count |
| Paid this month | Monthly payment total |
| Total revenue | Revenue overview |
| Recent invoices | Latest invoices at a glance |
| Recent payments | Latest payments received |
| Quick actions | Navigate to invoices, analytics, tracking |

---

## Materials & Stock

Material catalog and inventory management.

| Feature | Description |
|---------|-------------|
| AG Grid table | Material catalog with stock indicators |
| Stock level indicators | Color-coded stock status |
| Low stock alerts | Automatic alerts when stock is low |
| Create/edit materials | Full material form with pricing |
| Stock adjustment | Adjust stock levels with audit trail |
| Klarpris integration | Search and import material pricing from Klarpris |
| Material favorites | Quick access to frequently used materials |
| Material catalog view | Browse materials by category |
| Usage tracking | Track materials used per job |

---

## Documents

Document management with AI processing.

| Feature | Description |
|---------|-------------|
| Grid view | Visual document browser |
| File type filters | Images, PDFs, Documents, Spreadsheets |
| AI category filters | Receipts, Invoices, Contracts, Photos, Drawings |
| Document detail | Full metadata and preview |
| Upload | File upload with progress |
| OCR processing | Text extraction status |
| AI processing | Auto-categorization with confidence scores |
| Pin/Archive | Organize documents |
| Download | Direct file download |
| View tracking | Document view counts |

---

## Quality Management

Inspection and quality assurance workflows.

| Feature | Description |
|---------|-------------|
| Quality dashboard | Metrics: total inspections, pass rate, pending review, failures |
| Create inspection | New inspection from template |
| Inspection tracking | Status: passed, failed, in progress, requires review |
| Checklist templates | Create and manage inspection templates |
| Schema builder | Build quality schemas visually |
| PDF import | Import quality schemas from PDF documents |
| Pass/fail filtering | Filter inspections by result |

---

## Reports

Business reporting and analytics.

| Report | Description |
|--------|-------------|
| Profit & Loss | Revenue, expenses, and profit by period |
| AR Aging | Accounts receivable aging analysis |
| Work Order Summary | Job statistics by status, employee, or customer |
| Time Summary | Hours logged by employee, project, or period |
| Material Usage | Material consumption and profitability |

---

## Team Management

Team and organization management.

| Feature | Description |
|---------|-------------|
| Team list | AG Grid table of team members |
| Invite members | Email-based invitations |
| Manage invitations | View, resend, and cancel pending invites |
| Team member detail | Individual member profile and activity |
| Seat management | Track seat usage vs. plan limit |

---

## Settings

Organization and user configuration.

| Section | Features |
|---------|----------|
| Organization | Company name, team seats, data management |
| Profile | Personal info, language, notification preferences |
| Billing | Subscription plan, payment method, usage metrics |
| Business | Organization-specific business settings |
| Statuses | Custom work order status configuration |
| AI Usage | AI usage metrics and quota |
| Calendars | External calendar integration settings |
| Integrations | Third-party integration management |
| Number sequences | Invoice and order number sequences |
| Bank accounts | Bank account configuration for invoices |
| Payment terms | Default payment term settings |

---

## Data Import

Migration tools for moving from other systems.

| Feature | Description |
|---------|-------------|
| Import wizard | Step-by-step data import flow |
| AI field mapping | AI-suggested field mapping from source data |
| Schema discovery | Automatic source schema detection |
| Import history | Track past imports with status |
| Rollback | Undo a completed import |
| Preset imports | Pre-configured import templates |

---

## Navigation & UX

| Feature | Description |
|---------|-------------|
| Collapsible sidebar | Persistent sidebar with progressive disclosure |
| Command palette | Global search + keyboard shortcuts (Cmd+J, Cmd+K, Cmd+T) |
| Smart create button | Context-aware creation options |
| AI Copilot sidebar | Persistent AI chat interface |
| Dark mode | Full dark/light theme toggle |
| Glassmorphism design | Modern glass-morphic card design |
| Responsive | Adapts to mobile, tablet, and desktop |
| Animations | Smooth Framer Motion transitions |
