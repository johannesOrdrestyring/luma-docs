# Core Workflows

> The five event-driven flows at the heart of Luma. Everything starts with: **"What happened?"**

---

## Philosophy

Traditional ERPs are organized by modules: invoicing, time tracking, materials, HR. Users have to know which module to open.

Luma is organized by **events** — things that happen in a tradesperson's day. The user tells Luma what happened. Luma figures out the rest.

These five flows are accessible from the **FAB button** (floating action button) on both mobile and web.

---

## Did a Job

> "I finished a job and need to log it."

**Available on:** Mobile, Web

**What it does:**
1. Select or create the customer
2. Describe the work done
3. Log how long it took
4. Add materials used
5. Mark job as complete
6. Luma suggests creating an invoice

**What Luma handles automatically:**
- Links time entry to the job
- Updates job status to "completed"
- Calculates material costs
- Flags the job as "ready to invoice"
- Nudges the user on the My Day screen to invoice

**Data created:**
- Work order (or updates existing one)
- Time entry
- Material usage records
- Status change log

---

## Got Paid

> "A customer paid me."

**Available on:** Mobile, Web

**What it does:**
1. Shows list of unpaid invoices
2. Select the invoice that was paid
3. Enter payment amount
4. Select payment method
5. Confirm payment date
6. Luma records the payment

**What Luma handles automatically:**
- Marks invoice as paid (full or partial)
- Updates financial overview
- Closes the billing cycle for that job
- Updates AR aging reports

**Data created:**
- Payment record linked to invoice
- Invoice status update

---

## Bought Something

> "I bought materials or paid an expense."

**Available on:** Mobile, Web

**What it does:**
1. Take a photo of the receipt (or upload file)
2. AI extracts: vendor name, amount, VAT, date
3. Review and correct the extracted data
4. Select category (materials, tools, fuel, etc.)
5. Optionally link to a specific job
6. Save the expense

**What Luma handles automatically:**
- OCR text extraction from receipt image
- AI categorization of the expense
- VAT calculation
- Links expense to job for profitability tracking
- Stores receipt image as document

**Data created:**
- Expense record
- Document (receipt image)
- OCR data
- Optional job linkage

---

## Need to Remember

> "I need to remember to do something."

**Available on:** Mobile

**What it does:**
1. Type or speak the reminder text
2. Set a due date and time (optional)
3. Optionally link to a job
4. Save the reminder

**What Luma handles automatically:**
- Push notification at the scheduled time
- Shows on the My Day screen
- Can be completed with one tap
- Reminder stays visible until completed

**Data created:**
- Reminder record
- Optional job linkage
- Push notification schedule

---

## Help Me

> "I don't know what to do next."

**Available on:** Mobile

**What it does:**
1. Luma analyzes the user's current state
2. Shows context-aware suggestions:
   - Jobs that need invoicing
   - Overdue follow-ups
   - Unlogged time from calendar events
   - Pending reminders
3. User taps a suggestion to take action

**What Luma handles automatically:**
- Scans for incomplete workflows
- Prioritizes suggestions by urgency
- Links directly to the relevant action
- Learns from user behavior patterns

**Data created:**
- No new data — this flow surfaces existing data and suggests next actions

---

## Voice Agent (Bonus Flow)

> "Let me just tell Luma what happened."

**Available on:** Mobile (long-press FAB button)

In addition to the five tap-based flows, users can **speak** to Luma's voice agent. It supports:

- Creating customers
- Creating jobs
- Logging time
- Setting reminders

All in Swedish, with natural conversation. The voice agent handles the same operations as the manual flows but through voice interaction.

[More about Voice Agent &rarr;](./ai#voice-agent)

---

## Flow Architecture

```
User: "Something happened"
         │
         ├── Did a Job      → WorkOrder + TimeEntry + Materials
         ├── Got Paid        → Payment + Invoice status
         ├── Bought Something → Expense + Document (OCR)
         ├── Need to Remember → Reminder + Notification
         └── Help Me         → Suggestions (read-only)
```

Every flow creates structured data that feeds into invoicing, reporting, and financial overview. The user never needs to think about data entry — they just describe what happened.
