# Changelog

What we've been building. Updated as we ship.

---

## February 2026

### [February 24, 2026 — Create Customer — Now a Bottom Sheet](/changelog/2026-02#february-24-2026)
Creating a new customer now opens as a slide-up bottom sheet instead of a full-screen modal. It matches the same pattern as "Did a Job" — with a sticky swipe button at the bottom and proper keyboard handling.

### [February 24, 2026 — Call Log — Customer Search & Inline Creation](/changelog/2026-02#february-24-2026)
The "Log Call" sheet now has a proper customer picker with search and the ability to create new customers without leaving the flow.

### [February 24, 2026 — Job Detail — Keyboard No Longer Covers Notes](/changelog/2026-02#february-24-2026)
When editing the Notes (Work Done / Remarks) fields on a job, the keyboard covered the text input so you couldn't see what you were typing. Now the view scrolls up automatically.

### [February 24, 2026 — Quote Versioning](/changelog/2026-02#february-24-2026)
Quotes now support version history. When you revise a quote, the previous version is preserved and a new version is created — so you always have a record of what was sent.

### [February 23, 2026 — 13 User-Reported Bugs Fixed](/changelog/2026-02#february-23-2026)
A batch of bugs reported by pilot users have been resolved, covering signup, customer views, job entry, and more.

### [February 22, 2026 — Sprout Design System — Web](/changelog/2026-02#february-22-2026)
The web app now uses the Aceve green color palette across all components, matching the mobile app's Sprout design system. Dark mode uses a green-tinted background instead of flat black.

### [February 22, 2026 — Keyboard No Longer Covers Input Fields](/changelog/2026-02#february-22-2026)
Tapping a text field at the bottom of a form (like the description field when creating a job) no longer gets hidden behind the keyboard. The app now auto-scrolls to keep the focused field visible.

### [February 22, 2026 — New Date & Time Pickers](/changelog/2026-02#february-22-2026)
Date and time fields now use native iOS spinner wheels in a styled container instead of raw text inputs. Available when creating jobs, booking calendar events, and scheduling work.

### [February 22, 2026 — Document Re-Analyze Now Works](/changelog/2026-02#february-22-2026)
Previously, re-analyzing a document would silently fail if it had been analyzed before (even if the first attempt returned empty results). This is now fixed — re-analyze always processes the document fresh.

### [February 22, 2026 — Automatic TestFlight Submission](/changelog/2026-02#february-22-2026)
Production builds now automatically submit to TestFlight after building — no more manual step required.

### [February 18, 2026 — "Got a Request" — Create Quotes from What Happened?](/changelog/2026-02#february-18-2026)
The "What happened?" flow now includes a 6th option: **Got a Request**. When a customer asks for a quote, tap it and go straight to creating one. Quotes are also no longer a separate tab at the bottom — they live under Jobs alongside Customers, Invoices, and Documents.

### [February 18, 2026 — Invoice Status Visible on Jobs](/changelog/2026-02#february-18-2026)
Jobs now show their invoice status directly — no more guessing whether you've invoiced a completed job. The status appears in the job list, on the job detail hero, and in the lifecycle progress bar.

### [February 18, 2026 — Full Quote Management](/changelog/2026-02#february-18-2026)
Create, edit, preview, and send quotes directly from the mobile app. The complete quoting workflow is now available — from selecting a customer to previewing the PDF.

### [February 18, 2026 — Danish Language Support](/changelog/2026-02#february-18-2026)
Luma now speaks Danish! All screens, buttons, labels, and messages are available in Danish alongside English and Swedish.

### [February 17, 2026 — Job Creation Form](/changelog/2026-02#february-17-2026)
A brand new job creation form makes it easier to log work with all the details. Enter descriptions, pick customers, set schedules, and add materials — all from one smooth flow.

### [February 17, 2026 — Document Management](/changelog/2026-02#february-17-2026)
Attach photos and documents to your jobs. Take photos on site, organize them in a grid, and edit details later.

### [February 17, 2026 — Calendar Sync Improvements](/changelog/2026-02#february-17-2026)
Calendar sync is now more reliable with better settings and status visibility.

### [February 16, 2026 — Voice Agent Conversation Mode](/changelog/2026-02#february-16-2026)
Your voice assistant now supports natural back-and-forth conversation. After Luma responds, it automatically starts listening for your next command — no need to tap again.

### [February 16, 2026 — Sprint 1 Bug Fixes](/changelog/2026-02#february-16-2026)
Six issues from sprint 1 have been resolved, improving reliability across jobs, invoicing, and customer management.

### [February 16, 2026 — Theme System Overhaul](/changelog/2026-02#february-16-2026)
Replaced 48 files worth of hardcoded colors with proper theme tokens. Every screen now consistently follows the light/dark mode theme.

### [February 7, 2026 — Dark Mode Now Works Everywhere](/changelog/2026-02#february-7-2026)
Every screen in the mobile app now properly supports dark mode. Previously, many screens had white backgrounds, invisible text, or blending inputs when dark mode was enabled. Now all 69 screens respond correctly to your device's appearance setting.

### [February 6, 2026 — Voice Agent Gets Superpowers](/changelog/2026-02#february-6-2026)
Your voice assistant just got a lot smarter! Ask Luma about the weather, the time, or even for a joke when you need a laugh.

### [February 6, 2026 — GPS Permission & Voice Agent Settings Fix](/changelog/2026-02#february-6-2026)
GPS permission status now correctly reflects your device settings when you open the app. The voice agent toggle in settings also reliably persists across app restarts.

### [February 5, 2026 — Production Deployment Fixes](/changelog/2026-02#february-5-2026)
Several production features that were previously documented but not working have been fixed.

### [February 5, 2026 — Mobile Bug Fixes](/changelog/2026-02#february-5-2026)
Two bugs in the mobile app have been fixed.

### [February 5, 2026 — Add Time from Time Tab](/changelog/2026-02#february-5-2026)
You can now quickly add time entries directly from the Time tab. Tap the center button when on the Time tab to open the "Add Time" sheet - perfect for logging time you forgot to track with the timer.

### [February 4, 2026 — Face ID Login (Banking App Style)](/changelog/2026-02#february-4-2026)
Log in to Luma with just your face - no typing required. Perfect for when you're wearing work gloves or in a hurry. Face ID now works even if you've logged out, just like your banking app.

### [February 4, 2026 — Dark Mode Polish](/changelog/2026-02#february-4-2026)
The mobile app now looks great in dark mode across all screens. No more bright white screens when working at night.

### [February 4, 2026 — Swedish Company Lookup for Customers](/changelog/2026-02#february-4-2026)
When adding a new customer, you can now enter their Swedish organization number to automatically fill in their company details. No more manually typing company names and addresses - Luma fetches verified data from Bolagsverket.

### [February 4, 2026 — Team Invitation Management](/changelog/2026-02#february-4-2026)
See and manage all pending team invitations in one place. Resend reminders to people who haven't accepted yet, or cancel invitations that are no longer needed.

### [February 4, 2026 — Team Invitation Fixes](/changelog/2026-02#february-4-2026)
Team invitations now work more reliably with better error handling and email delivery.

### [February 4, 2026 — Smoother Mobile Notifications](/changelog/2026-02#february-4-2026)
Success and error messages in the mobile app now appear as smooth, animated toasts instead of popup dialogs.

### [February 4, 2026 — Face ID & Touch ID Login](/changelog/2026-02#february-4-2026)
Log in faster with biometric authentication. If you've enabled Face ID or Touch ID in settings, you'll see a quick login button on the login screen.

### [February 4, 2026 — Improved Company Switcher](/changelog/2026-02#february-4-2026)
The company selection screen now looks better and feels smoother, with personalized greetings based on time of day.

### [February 3, 2026 — Swedish Company Auto-Fill (Onboarding)](/changelog/2026-02#february-3-2026)
When creating your company account, just enter your Swedish organization number and Luma automatically fills in your company details from Bolagsverket. No more typing your company name, address, or industry - it's all verified and ready in seconds.

### [February 3, 2026 — Updated Login Screen Branding](/changelog/2026-02#february-3-2026)
The mobile login screen now displays the proper Luma logo mark alongside the "Luma" text, matching the web app branding. The "Get started" link is now properly aligned below the prompt text.

### [February 3, 2026 — Organization Selection Flow (Web)](/changelog/2026-02#february-3-2026)
New users on the web app now see a "Welcome to Luma" screen with clear options to either start their own business or join an existing team. This matches the mobile app experience.

### [February 2, 2026 — Calendar Sync Settings & Improvements](/changelog/2026-02#february-2-2026)
Manage your calendar connections directly from the mobile app. See sync status at a glance, and start tracking time right from your calendar.

### [February 2, 2026 — AI-Powered Business Suggestions](/changelog/2026-02#february-2-2026)
The "Help Me" feature now uses AI to give you personalized, natural-language suggestions about your business. Luma analyzes your jobs, invoices, and schedule to give you advice that feels like talking to a helpful colleague.

### [February 1, 2026 — Calendar Sync Now Fetches All Events](/changelog/2026-02#february-1-2026)
Previously, syncing your calendar would only import the first ~60 events, which often meant your future appointments were missing. This has been fixed - calendar sync now retrieves all your events within the sync window (30 days past to 90 days future).

### [February 1, 2026 — Professional Resource Calendar](/changelog/2026-02#february-1-2026)
Your schedule page now features a powerful new calendar built on Bryntum Calendar, designed for field service teams that need to manage multiple technicians.

### [February 1, 2026 — Edit External Calendar Events](/changelog/2026-02#february-1-2026)
You can now edit events that came from your Google, Outlook, or Apple calendar directly in the Luma app. Changes automatically sync back to your original calendar.

---

## January 2026

### [January 31, 2026 — iOS 26 SDK Support](/changelog/2026-01#january-31-2026)
The Luma mobile app now builds with Apple's latest iOS 26 SDK, meeting the April 2026 App Store requirement.

### [January 31, 2026 — Bidirectional Calendar Sync](/changelog/2026-01#january-31-2026)
Your external calendars (Google, Microsoft, Apple) now sync both ways with Luma. Events from your calendar automatically appear in Luma, and Luma events can be pushed to your calendar.

### [January 31, 2026 — Smart Receipt Scanning for Expenses](/changelog/2026-01#january-31-2026)
You can now take a photo of a receipt and let AI extract the details automatically. The app shows how confident it is about each field, so you know what to double-check.

### [January 31, 2026 — Calendar Loading Fix](/changelog/2026-01#january-31-2026)
Fixed an issue where the mobile calendar could fail to load with a "column not found" error when sorting jobs.

### [January 31, 2026 — Mobile Login Reliability](/changelog/2026-01#january-31-2026)
Fixed rate limiting conflicts that could cause "Too Many Requests" errors during login.

### [January 30, 2026 — Quick Access Menu on FAB](/changelog/2026-01#january-30-2026)
Long-press the center FAB button to instantly access Expense, Payment, Reminder, and Help actions. A half-moon menu fans out above the button with smooth spring animations and haptic feedback.

### [January 30, 2026 — Fixed Login and Onboarding Flow](/changelog/2026-01#january-30-2026)
You can now sign in and complete the onboarding process without errors. Previously, users would see authentication errors or get stuck in redirect loops after signing in.

### [January 30, 2026 — Premium Mobile App Redesign](/changelog/2026-01#january-30-2026)
The Luma mobile app now features a completely redesigned premium interface inspired by Spotify and Apple's latest design language.

### [January 29, 2026 — Mobile App Premium Polish](/changelog/2026-01#january-29-2026)
The Luma mobile app now feels truly premium with smooth animations, biometric login, and Swedish language support.

### [January 29, 2026 — New Welcome Experience & Swedish Onboarding](/changelog/2026-01#january-29-2026)
Your first experience with Luma is now warmer and more personal. When you sign up, you'll be greeted by name and guided through a simple 3-step setup wizard.

### [January 29, 2026 — Login & API Connection Fixed](/changelog/2026-01#january-29-2026)
Fixed issues preventing users from logging in and accessing data after the production launch.

### [January 28, 2026 — Production Launch](/changelog/2026-01#january-28-2026)


### [January 27, 2026 — Mobile App Ready for Beta](/changelog/2026-01#january-27-2026)
The Luma mobile app (iOS & Android) is complete and ready for beta testing.

### [January 21, 2026 — Luma Vision Documented](/changelog/2026-01#january-21-2026)
Published our product vision and design principles.

### [January 21, 2026 — Week of January 7-20](/changelog/2026-01#january-21-2026)
See our [Roadmap](/roadmap) for what's coming in Q1 2026 and beyond.

---

## Quick Links

- [Roadmap](/roadmap) — What's coming next
- [Vision](/vision) — Why we're building Luma
