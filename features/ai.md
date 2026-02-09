# AI Capabilities

> AI features built into Luma — from voice input to financial intelligence.

---

## Voice Agent

**Available on:** Mobile (long-press FAB button)

A conversational AI assistant that lets field workers interact with Luma by speaking instead of typing. Designed for hands that are dirty, wet, or holding tools.

### How it works

1. Long-press the floating action button
2. Full-screen voice interface opens
3. Speak naturally in Swedish
4. Luma transcribes, processes, and responds
5. Responses are read aloud via text-to-speech

### Voice commands

| Command | Example | What Luma does |
|---------|---------|----------------|
| Create customer | "Lägg till kund Andersson Bygg" | Creates a new customer record |
| Create job | "Skapa ett jobb åt Eriksson, byta kran i köket" | Creates a work order |
| Log time | "Jag jobbade 3 timmar hos Nilsson idag" | Creates a time entry |
| Set reminder | "Påminn mig att ringa leverantören imorgon" | Creates a reminder |

### Technical details

- **Language:** Swedish (full conversation support)
- **Transcription:** Real-time speech-to-text
- **AI model:** Claude (Anthropic) for reasoning and tool use
- **TTS:** Text-to-speech for responses
- **Context:** Multi-turn conversations — remembers what was said earlier
- **Interface:** Full-screen bottom sheet with chat bubble UI

---

## Invoice AI

**Available on:** Mobile, Web

AI-powered analysis of invoice drafts before sending to the customer.

### Features

| Feature | Description |
|---------|-------------|
| Margin analysis | Calculates profit margin per line item and total |
| Pricing suggestions | Recommends price adjustments based on market data |
| Profit optimization | Suggests ways to improve profitability |
| Description improvement | Rewrites line item descriptions to be professional and clear |
| Risk analysis | Flags potential issues (unusually low prices, missing items) |

### How it works

1. Generate invoice from a completed job
2. Review the draft in the invoice builder
3. Click "AI Analysis" to get suggestions
4. Apply suggestions one-by-one or all at once
5. Review and send

---

## AI Copilot

**Available on:** Web (sidebar panel)

A persistent AI chat interface in the web dashboard. Provides business guidance and answers questions about the user's data.

### Capabilities

- Answer questions about jobs, customers, and invoices
- Suggest next actions based on current state
- Explain financial concepts in plain language
- Help with decision-making
- Learn from user behavior patterns

---

## Business Suggestions

**Available on:** Mobile (My Day), Web (Dashboard)

Proactive AI-generated suggestions based on the user's business activity.

### Types of suggestions

| Suggestion | Trigger |
|------------|---------|
| "Invoice this job" | Job completed but not yet invoiced |
| "Follow up on payment" | Invoice sent but overdue |
| "Log your time" | Calendar events without time entries |
| "Complete this reminder" | Overdue reminders |
| "Review these expenses" | Unlinked expenses |

### How it works

- Behavioral AI analyzes patterns
- Suggestions ranked by urgency and impact
- Displayed on dashboard and My Day screen
- One-tap to take action

---

## Receipt OCR

**Available on:** Mobile

AI-powered receipt scanning and data extraction.

### What it extracts

| Field | Description |
|-------|-------------|
| Vendor name | The business that issued the receipt |
| Total amount | The total including VAT |
| VAT amount | Separated VAT amount |
| Date | Receipt date |
| Line items | Individual items when readable |

### How it works

1. Take a photo of the receipt
2. OCR extracts text from the image
3. AI parses structured data from the text
4. User reviews and corrects any errors
5. Expense is created and categorized

---

## AI Data Import

**Available on:** Web

AI-assisted data migration from other systems.

### Features

| Feature | Description |
|---------|-------------|
| Schema discovery | Automatically detects columns and data types from uploaded files |
| Field mapping suggestions | AI recommends how source columns map to Luma fields |
| Data validation | Flags potential issues before import |
| Preset templates | Pre-configured mappings for common systems |

---

## AI Architecture

| Component | Technology |
|-----------|------------|
| Reasoning & Tool Use | Anthropic Claude |
| Text Generation | OpenAI + Anthropic (via Vercel AI SDK) |
| Speech-to-Text | Expo Audio + transcription service |
| Text-to-Speech | Expo Speech (native) |
| Embeddings | pgvector (PostgreSQL) |
| Behavioral Learning | Custom pattern detection |

### Guardrails

- AI quota management per organization
- Usage tracking (tokens, cost, execution time)
- Audit logging of all AI operations
- Rate limiting to prevent abuse
- GDPR-compliant data handling — no data sent outside EU
