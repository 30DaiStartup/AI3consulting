# AI3 Consulting Website Overhaul - Development Backlog

**Project:** AI3 Consulting Platform Overhaul
**Launch Target:** February 2026
**Existing Stack:** Next.js 14, TypeScript, Tailwind CSS, Vercel
**Document Version:** 2.0
**Last Updated:** January 5, 2026

---

## Executive Summary

This backlog structures development of the AI3 Consulting platform overhaul with **conversion funnel prioritization**. The landing page and purchase flow are the immediate priority to enable ad traffic conversion. Infrastructure, auth, and alumni portal features are deferred until the week before the first bootcamp.

**Phase 1 Goal:** Get a functioning sales funnel live ASAP
- Ads → Landing Page → Engagement (Quiz/Calculator) → Payment → Confirmation

**Minimal Dependencies for Phase 1:**
- Stripe (payments + customer data storage)
- Resend (confirmation emails)
- Vercel (hosting)

**Deferred Until Week Before Bootcamp:**
- PostgreSQL + Prisma (use Stripe metadata for now)
- NextAuth.js authentication
- Sanity.io CMS
- Alumni Portal
- Admin Dashboard

---

## Phase Overview

| Phase | Focus | Batches | Timeline |
|-------|-------|---------|----------|
| **Phase 1** | Conversion Funnel | B01-B04 | Now → 2 weeks |
| **Phase 2** | Infrastructure | B05-B06 | Week before bootcamp |
| **Phase 3** | Alumni Portal | B07-B09 | Post-launch |
| **Phase 4** | Security & Polish | B10-B11 | Before portal launch |

---

## Batch Overview

| Batch | Focus | Parallel Tracks | Key Deliverables |
|-------|-------|-----------------|------------------|
| **PHASE 1: CONVERSION FUNNEL** ||||
| B01 | Landing Page Core | 3 tracks | Hero, Social Proof, Pain Points, Page Assembly |
| B02 | Interactive Tools | 2 tracks | ROI Calculator, High-Agency Quiz |
| B03 | Payment & Registration | 2 tracks | Stripe Integration, Registration Form, Confirmation |
| B04 | Waitlist & Supporting | 2 tracks | Waitlist, Contact, About, Legal Pages |
| **PHASE 2: INFRASTRUCTURE** ||||
| B05 | Foundation Setup | 4 tracks | Database, Auth, Email Templates, Config |
| B06 | Core Infrastructure | 3 tracks | API Routes, Design System Expansion, Dev Tools |
| **PHASE 3: ALUMNI PORTAL** ||||
| B07 | Portal Authentication | 3 tracks | Login, Protected Routes, Subscription Management |
| B08 | Portal Features | 4 tracks | Library, Updates, Community, Profile |
| B09 | Admin Dashboard | 3 tracks | Registration Mgmt, Cohort Mgmt, Analytics |
| **PHASE 4: SECURITY & POLISH** ||||
| B10 | Security Audit | 4 tracks | Security Review, Dependency Scan, Auth Audit |
| B11 | Polish & Launch | 4 tracks | Testing, Performance, Content, Deployment |

---

## Naming Convention

Tasks follow the format: **B##-X-##**
- **B##** = Batch number (B01, B02, etc.)
- **X** = Track letter (A, B, C, D)
- **##** = Task number within track (01, 02, 03, etc.)

**Example:** B01-A-02 = Batch 1, Track A, Task 2

---

## CPO Handoff

**Date:** January 5, 2026
**Prioritization Update:** Conversion funnel first, infrastructure deferred

**Key Decisions:**
- Landing page and payment flow are immediate priority
- Database/Auth not needed until week before bootcamp
- Use Stripe metadata + dashboard for initial customer management
- Static content in code (no CMS needed for Phase 1)

---

>>> RESUME HERE <<<

---

# PHASE 1: CONVERSION FUNNEL

**Goal:** Functioning sales funnel to convert ad traffic into paid registrations

**Dependencies:** Stripe account, Resend API key, Vercel deployment

---

## BATCH 01: Landing Page Core

**Purpose:** Build the primary landing page with all conversion elements.

### Track A: Hero & Header

**B01-A-01: Create Header Navigation**
- Files: `src/components/layout/Header.tsx`, `src/components/layout/Navigation.tsx`
- Description: Site-wide header with responsive navigation
- Acceptance Criteria:
  - Logo (hexagonal) links to homepage
  - Desktop navigation: Bootcamp, About, Contact
  - Mobile hamburger menu (slide-in drawer)
  - CTA button: "Calculate Your ROI" (sticky on scroll)
  - Sticky header on scroll
  - Accessibility: keyboard navigation, focus management

**B01-A-02: Create Hero Section**
- Files: `src/components/bootcamp/HeroSection.tsx`
- Description: Main hero section with headline, CTAs, scarcity indicator
- Acceptance Criteria:
  - Hexagonal logo displayed (large size)
  - Tagline: "Business AI Mastery"
  - H1: "Transform Your Business Operations in 3 Days"
  - Subheadline: "The AI Bootcamp for Leaders Who Get Things Done—12 Seats Only"
  - Dual CTAs: "Calculate Your ROI" (primary), "Take the High-Agency Quiz" (secondary)
  - Trust indicators: "February 2026 • Greenville, SC • $5,000 Investment"
  - Gradient background with grid pattern
  - Responsive: stacked on mobile, centered on desktop
  - Framer Motion entrance animations (fade + slide)

**B01-A-03: Create Seat Availability Badge**
- Files: `src/components/bootcamp/SeatAvailabilityBadge.tsx`
- Description: Scarcity indicator showing remaining seats
- Acceptance Criteria:
  - Displays "X of 12 Seats Remaining" (hardcoded initially, API later)
  - Low inventory (≤3 seats): warning gold color with pulse animation
  - Full cohort: "Waitlist Now Open" message
  - aria-live="polite" for screen readers

**B01-A-04: Create Footer Component**
- Files: `src/components/layout/Footer.tsx`
- Description: Site-wide footer with links and contact
- Acceptance Criteria:
  - Logo and tagline
  - Link columns: Company (About, Contact), Bootcamp (ROI Calculator, Quiz, Waitlist), Legal (Privacy, Terms, Refund Policy)
  - Social media icons (LinkedIn)
  - Copyright notice
  - Responsive: stacked on mobile, columns on desktop

### Track B: Social Proof & Pain Points

**B01-B-01: Create Testimonial Card Component**
- Files: `src/components/bootcamp/TestimonialCard.tsx`
- Description: Testimonial display with headshot and company info
- Acceptance Criteria:
  - Props: quote, name, title, company, headshot
  - Card layout: headshot (left), quote (center)
  - Responsive: stacked on mobile, row on desktop
  - Elevated card variant with hover effect
  - Accessible: blockquote semantic HTML

**B01-B-02: Create Social Proof Section**
- Files: `src/components/bootcamp/SocialProofSection.tsx`
- Description: Section immediately below hero with featured testimonial
- Acceptance Criteria:
  - Section component with offWhite background
  - Single featured testimonial
  - Scroll-triggered fade-in animation
  - Max-width container
  - Centered layout

**B01-B-03: Create Pain Point Card Component**
- Files: `src/components/bootcamp/PainPointCard.tsx`
- Description: Icon + title + description card for pain points
- Acceptance Criteria:
  - Props: icon, title, description
  - Outlined card variant with hover border change
  - Icon in circular gold/silver background
  - Centered text layout
  - Hover animation (lift + border color change)

**B01-B-04: Create Pain Points Section**
- Files: `src/components/bootcamp/PainPointsSection.tsx`
- Description: 3-column grid showcasing problems solved
- Acceptance Criteria:
  - Section with white background
  - SectionNumber component ("01")
  - H2: "The Problems We Solve"
  - 3-column grid (1 col mobile, 3 col desktop)
  - Pain points: Manual Processes, AI Fear & Hype, Tool Overload
  - Stagger animation on scroll into view
  - Icons from lucide-react library

### Track C: Curriculum & Conversion Elements

**B01-C-01: Create Curriculum Section**
- Files: `src/components/bootcamp/CurriculumSection.tsx`
- Description: 3-day bootcamp schedule breakdown
- Acceptance Criteria:
  - 3 cards for Day 1, Day 2, Day 3
  - Each card: day title, time (9 AM - 3 PM), topics list, outcomes list
  - Icons for each day theme
  - Stagger animation on scroll
  - Responsive: stacked on mobile, grid on desktop

**B01-C-02: Create Comparison Table Component**
- Files: `src/components/bootcamp/ComparisonTable.tsx`
- Description: Old Way vs. New Way side-by-side
- Acceptance Criteria:
  - 2-column table: "Without AI3 Bootcamp" vs. "With AI3 Bootcamp"
  - Rows: Time to implement, ROI timeline, Ongoing support, Team readiness, Risk level
  - Visual differentiation: red X for old way, green checkmark for new way
  - Mobile: cards instead of table

**B01-C-03: Create FAQ Accordion**
- Files: `src/components/bootcamp/FAQSection.tsx`
- Description: Frequently asked questions with expand/collapse
- Acceptance Criteria:
  - 8-10 FAQs covering: refund policy, prerequisites, nonprofit seats, location/parking, food provided, payment options
  - Accordion component (Radix UI or custom)
  - One open at a time
  - Smooth expand/collapse animation
  - Schema.org FAQPage markup for SEO

**B01-C-04: Create Final CTA Section**
- Files: `src/components/bootcamp/FinalCTASection.tsx`
- Description: Bottom-of-page conversion push
- Acceptance Criteria:
  - Gradient background (navy to charcoal)
  - H2: "Ready to Transform Your Business?"
  - Seat availability badge
  - Primary CTA: "Reserve Your Seat - $5,000"
  - Secondary: "Join the Waitlist"
  - Trust elements: money-back guarantee, dates

**B01-C-05: Assemble Homepage**
- Files: `src/app/page.tsx`
- Description: Assemble all landing page sections
- Acceptance Criteria:
  - Imports all section components
  - Sections rendered in conversion-optimized order:
    1. Hero
    2. Social Proof
    3. Pain Points
    4. ROI Calculator (placeholder - built in B02)
    5. Curriculum
    6. Quiz (placeholder - built in B02)
    7. Comparison Table
    8. FAQ
    9. Final CTA
  - Page metadata (title, description, og:image)
  - Smooth scroll between sections

---

## BATCH 02: Interactive Tools

**Purpose:** Build ROI Calculator and High-Agency Quiz with email capture.

### Track A: ROI Calculator

**B02-A-01: Create ROI Calculation Utility**
- Files: `src/utils/roiCalculator.ts`
- Description: Core calculation logic per PRD formulas
- Acceptance Criteria:
  - calculateROI() function takes category, hoursPerWeek, teamSize
  - Returns weeklyHoursSaved, annualSavingsMin, annualSavingsMax, roiMultiple, paybackWeeks
  - Conservative 70% automation rate
  - Hourly rate range $40-60
  - TypeScript interfaces exported

**B02-A-02: Create ROI Calculator Form Component**
- Files: `src/components/bootcamp/ROICalculatorForm.tsx`
- Description: Input form for calculator
- Acceptance Criteria:
  - Pain point category dropdown (9 pre-defined options)
  - Description text input (150 char limit with counter)
  - Team size slider (1-100 range) with value display
  - Hours per week number input (1-168 validation)
  - "Calculate My ROI" submit button
  - Form validation with error messages
  - Responsive layout

**B02-A-03: Create ROI Results Display Component**
- Files: `src/components/bootcamp/ROICalculatorResults.tsx`
- Description: Animated results display with key metrics
- Acceptance Criteria:
  - Gradient background card (navy to charcoal)
  - 3-column grid: Weekly Hours Saved, Annual Savings Range, ROI Multiple
  - CountUp animation for numbers
  - Payback period highlight box
  - Assumptions disclaimer text
  - CTAs: "Lock In Your Seat" (primary), "Email Me These Results" (secondary)
  - Responsive: stacked on mobile, grid on desktop
  - Framer Motion entrance animation

**B02-A-04: Create Email Results Modal**
- Files: `src/components/bootcamp/EmailResultsModal.tsx`
- Description: Modal to capture email and send ROI results
- Acceptance Criteria:
  - Email input with validation
  - First name input (optional)
  - "Send My Results" button
  - Sends email via API route
  - Success confirmation
  - Stores lead in Stripe metadata or sends to webhook

**B02-A-05: Implement Calculator API Routes**
- Files: `src/app/api/calculator/calculate/route.ts`, `src/app/api/calculator/email-results/route.ts`
- Description: API endpoints for calculation and email
- Acceptance Criteria:
  - POST /api/calculator/calculate validates input and returns ROI
  - POST /api/calculator/email-results sends results via Resend
  - Rate limiting: 10 submissions per hour per IP
  - Basic input validation

**B02-A-06: Assemble ROI Calculator Section**
- Files: `src/components/bootcamp/ROICalculatorSection.tsx`
- Description: Full calculator section for landing page
- Acceptance Criteria:
  - Section with offWhite background
  - SectionNumber ("02")
  - H2: "See Your Potential ROI"
  - Form and results in conditional render
  - Email modal integration
  - Reset button to recalculate

### Track B: High-Agency Quiz

**B02-B-01: Create Quiz Scoring Utility**
- Files: `src/utils/quizScoring.ts`
- Description: Quiz scoring logic and qualification threshold
- Acceptance Criteria:
  - calculateScore() function takes answers array (5 elements, values 5/10/15/20)
  - Returns total score (25-100 range)
  - qualified boolean (score >= 65)
  - TypeScript interfaces exported

**B02-B-02: Create Quiz Question Component**
- Files: `src/components/bootcamp/QuizQuestion.tsx`
- Description: Single question display with answer options
- Acceptance Criteria:
  - Props: question text, answers array (A/B/C/D with point values), onAnswer callback
  - Answer buttons with A/B/C/D labels
  - Hover and selected states
  - Framer Motion slide transitions
  - Accessible: keyboard navigation

**B02-B-03: Create Quiz Progress Indicator**
- Files: `src/components/bootcamp/QuizProgress.tsx`
- Description: Visual progress bar for 5-question quiz
- Acceptance Criteria:
  - 5 progress dots/bars
  - Completed steps highlighted in gold
  - Current step emphasized
  - Animated transitions between steps

**B02-B-04: Create Quiz Results Component**
- Files: `src/components/bootcamp/QuizResults.tsx`
- Description: Results page with score, badge, and CTA
- Acceptance Criteria:
  - Score display in hexagonal badge
  - Qualified message: "You're High-Agency—You Qualify!"
  - Not qualified message: "Not Quite High-Agency Yet" with alternative
  - Conditional CTA: "Reserve Your Seat" (qualified) or "Join Waitlist" (not qualified)
  - LinkedIn sharing button
  - Badge download as image
  - Framer Motion scale animation

**B02-B-05: Create Email Gate Component**
- Files: `src/components/bootcamp/QuizEmailGate.tsx`
- Description: Email capture before showing results
- Acceptance Criteria:
  - Email input (required)
  - First name input (optional)
  - "See My Results" button
  - Stores lead via API
  - Shows results after submission

**B02-B-06: Implement Quiz API Route**
- Files: `src/app/api/quiz/submit/route.ts`
- Description: Quiz submission endpoint
- Acceptance Criteria:
  - POST /api/quiz/submit validates answers, calculates score
  - Requires email field
  - Stores submission (Stripe metadata, webhook, or simple file/email for now)
  - Returns score and qualified status
  - Rate limiting: 10 submissions per hour per IP

**B02-B-07: Assemble Quiz Section**
- Files: `src/components/bootcamp/QuizSection.tsx`
- Description: Full quiz flow component
- Acceptance Criteria:
  - Section with gradient background
  - SectionNumber ("03")
  - H2: "Are You High-Agency Enough?"
  - Multi-step state management (intro → questions → email → results)
  - Progress indicator
  - Question transitions with animations
  - localStorage to prevent retakes (optional)

---

## BATCH 03: Payment & Registration

**Purpose:** Stripe integration and registration flow to accept payments.

### Track A: Stripe Integration

**B03-A-01: Set Up Stripe Client**
- Files: `src/lib/stripe.ts`, `package.json`
- Description: Initialize Stripe SDK
- Acceptance Criteria:
  - stripe package installed
  - Server-side Stripe client with secret key
  - Client-side loadStripe with publishable key
  - STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY in environment
  - Create Stripe product and price for bootcamp ($5,000)

**B03-A-02: Create Checkout Session API**
- Files: `src/app/api/checkout/route.ts`
- Description: Create Stripe Checkout session for bootcamp purchase
- Acceptance Criteria:
  - POST /api/checkout creates Checkout Session
  - Includes customer email, name, company in metadata
  - Success URL: /confirmation?session_id={CHECKOUT_SESSION_ID}
  - Cancel URL: /bootcamp
  - Collects billing address
  - Returns sessionId and checkout URL

**B03-A-03: Create Stripe Webhook Handler**
- Files: `src/app/api/webhooks/stripe/route.ts`
- Description: Handle Stripe webhook events
- Acceptance Criteria:
  - Verifies webhook signature
  - Handles checkout.session.completed event
  - Sends confirmation email via Resend
  - Logs successful purchases
  - Returns 200 response

**B03-A-04: Set Up Resend Email Client**
- Files: `src/lib/email.ts`, `package.json`
- Description: Initialize Resend for transactional emails
- Acceptance Criteria:
  - resend package installed
  - Resend client initialized with API key
  - sendEmail() wrapper function
  - Error handling for failed sends

**B03-A-05: Create Registration Confirmation Email**
- Files: `src/emails/RegistrationConfirmation.tsx`
- Description: Email sent after successful payment
- Acceptance Criteria:
  - React email template with AI3 branding
  - Personalized greeting (first name)
  - Registration details: cohort date, location, price paid
  - Next steps list (Claude signup, what to bring)
  - Support contact information
  - Plain text fallback

### Track B: Registration Flow

**B03-B-01: Create Registration Form Component**
- Files: `src/components/bootcamp/RegistrationForm.tsx`
- Description: Pre-checkout registration form
- Acceptance Criteria:
  - Fields: firstName, lastName, email, phone, companyName, jobTitle
  - Top 3 pain points selection (checkboxes from list)
  - Custom pain point text input
  - Form validation
  - "Proceed to Payment" button
  - Stores form data in state for Stripe metadata

**B03-B-02: Create Registration Page**
- Files: `src/app/register/page.tsx`
- Description: Dedicated registration page
- Acceptance Criteria:
  - Registration form component
  - Order summary sidebar (bootcamp details, price)
  - Seat availability indicator
  - Trust elements (secure payment, refund policy)
  - Redirects to Stripe Checkout on submit

**B03-B-03: Create Confirmation Page**
- Files: `src/app/confirmation/page.tsx`
- Description: Post-payment success page
- Acceptance Criteria:
  - Retrieves session data from Stripe
  - Displays confirmation message
  - Registration details from session metadata
  - Next steps checklist
  - Calendar invite download (.ics file)
  - Share on social media buttons
  - Analytics conversion tracking

**B03-B-04: Create Calendar Invite Utility**
- Files: `src/utils/calendar.ts`
- Description: Generate .ics file for bootcamp dates
- Acceptance Criteria:
  - generateCalendarInvite() function
  - Takes cohort date, location
  - Returns .ics file content
  - 3-day event (9 AM - 3 PM each day)
  - Reminder set for 1 day before

**B03-B-05: Create Nonprofit Application Flow**
- Files: `src/app/apply-nonprofit/page.tsx`, `src/app/api/nonprofit-application/route.ts`
- Description: Alternative path for nonprofit seat applications
- Acceptance Criteria:
  - Application form: org name, mission, contact info, why they qualify
  - Submits via API (sends email notification to you)
  - Confirmation page explaining review process
  - No payment required

---

## BATCH 04: Waitlist & Supporting Pages

**Purpose:** Waitlist functionality and supporting pages to complete the site.

### Track A: Waitlist

**B04-A-01: Create Waitlist Form Component**
- Files: `src/components/bootcamp/WaitlistForm.tsx`
- Description: Email capture for waitlist
- Acceptance Criteria:
  - Fields: firstName, lastName, email, companyName
  - Optional: preferred cohort (dropdown with future dates)
  - Submit button
  - Success state with position number
  - Form validation

**B04-A-02: Create Waitlist Page**
- Files: `src/app/waitlist/page.tsx`
- Description: Standalone waitlist signup page
- Acceptance Criteria:
  - Headline: "Join the Waitlist"
  - Description of upcoming cohorts
  - Waitlist form
  - Social proof (testimonial)
  - FAQ about waitlist process

**B04-A-03: Implement Waitlist API**
- Files: `src/app/api/waitlist/route.ts`
- Description: Waitlist submission endpoint
- Acceptance Criteria:
  - POST /api/waitlist adds to waitlist
  - Stores in simple JSON file, Airtable, or sends to email
  - Sends confirmation email
  - Returns position number
  - 409 if already on waitlist

**B04-A-04: Create Waitlist Confirmation Email**
- Files: `src/emails/WaitlistConfirmation.tsx`
- Description: Email sent after joining waitlist
- Acceptance Criteria:
  - Confirmation of waitlist position
  - Expected notification timeline
  - Links to quiz/calculator if not completed
  - Plain text fallback

### Track B: Supporting Pages

**B04-B-01: Create About Page**
- Files: `src/app/about/page.tsx`
- Description: Founder story and philosophy
- Acceptance Criteria:
  - Hero with founder photo and headline
  - Founder story (3-4 paragraphs)
  - Philosophy section
  - Credentials/background
  - CTA: "Learn About the Bootcamp"

**B04-B-02: Create Contact Page**
- Files: `src/app/contact/page.tsx`
- Description: Contact form and information
- Acceptance Criteria:
  - Contact form: name, email, subject, message
  - Submit via API (sends email to you)
  - Success message
  - Contact information
  - Response time expectation

**B04-B-03: Implement Contact API**
- Files: `src/app/api/contact/route.ts`
- Description: Contact form submission
- Acceptance Criteria:
  - POST /api/contact validates and sends email
  - Sends notification to your inbox
  - Auto-reply to sender (optional)
  - Rate limiting: 5 per hour per IP

**B04-B-04: Create Legal Pages**
- Files: `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/refund/page.tsx`
- Description: Privacy policy, terms, refund policy
- Acceptance Criteria:
  - Privacy: data collection, usage, third parties
  - Terms: bootcamp participation, liability
  - Refund: 14-day full refund policy
  - Simple layout with sections
  - Last updated date

**B04-B-05: Create 404 Page**
- Files: `src/app/not-found.tsx`
- Description: Custom 404 error page
- Acceptance Criteria:
  - Friendly message
  - Links to: Home, Bootcamp, Contact
  - Brand consistent design

---

# PHASE 2: INFRASTRUCTURE (Week Before Bootcamp)

**Goal:** Set up proper database and authentication for attendee management.

---

## BATCH 05: Foundation Setup

**Purpose:** Establish database, authentication, and email infrastructure.

### Track A: Database Setup (PostgreSQL + Prisma)

**B05-A-01: Initialize PostgreSQL Database**
- Files: `docker-compose.yml`, `.env.example`
- Description: Set up local PostgreSQL database via Docker
- Acceptance Criteria:
  - Docker Compose file creates PostgreSQL 15.x container
  - Environment variables configured
  - Database accessible on localhost:5432

**B05-A-02: Install Prisma ORM**
- Files: `package.json`, `prisma/schema.prisma`
- Description: Add Prisma with initial schema
- Acceptance Criteria:
  - Prisma CLI and client installed
  - Schema file created
  - `prisma generate` runs successfully

**B05-A-03: Create Core Database Schema**
- Files: `prisma/schema.prisma`
- Description: Define data models
- Acceptance Criteria:
  - BootcampRegistration model
  - QuizResult model
  - WaitlistEntry model
  - PortalUser model
  - Cohort model

**B05-A-04: Run Initial Migration**
- Files: `prisma/migrations/`
- Description: Apply database migration
- Acceptance Criteria:
  - Migration applied successfully
  - Prisma Studio can view tables

### Track B: Authentication Setup (NextAuth.js)

**B05-B-01: Install NextAuth.js**
- Files: `package.json`
- Description: Add NextAuth with Prisma adapter
- Acceptance Criteria:
  - next-auth installed
  - @next-auth/prisma-adapter installed

**B05-B-02: Create NextAuth API Route**
- Files: `src/app/api/auth/[...nextauth]/route.ts`, `src/lib/auth.ts`
- Description: Configure NextAuth with email/password
- Acceptance Criteria:
  - API route handles auth
  - Prisma adapter connected
  - JWT sessions configured

**B05-B-03: Add Auth Models to Prisma**
- Files: `prisma/schema.prisma`
- Description: Add NextAuth required models
- Acceptance Criteria:
  - User, Account, Session, VerificationToken models
  - Migration applied

**B05-B-04: Create Auth Utility Functions**
- Files: `src/lib/auth.ts`
- Description: Helper functions for auth checks
- Acceptance Criteria:
  - getServerSession() helper
  - requireAuth() middleware
  - checkSubscription() helper

### Track C: Email Templates

**B05-C-01: Create Email Template System**
- Files: `src/emails/components/`
- Description: Reusable email components
- Acceptance Criteria:
  - Email layout component
  - Button component
  - Header/Footer components
  - Consistent branding

**B05-C-02: Create Portal Invitation Email**
- Files: `src/emails/PortalInvitation.tsx`
- Description: Email inviting bootcamp attendees to portal
- Acceptance Criteria:
  - Personalized greeting
  - Portal benefits
  - Signup link with token
  - Trial period info

**B05-C-03: Create Payment Failed Email**
- Files: `src/emails/PaymentFailed.tsx`
- Description: Email for failed subscription payments
- Acceptance Criteria:
  - Clear explanation
  - Update payment link
  - Support contact

**B05-C-04: Create Password Reset Email**
- Files: `src/emails/PasswordReset.tsx`
- Description: Email with password reset link
- Acceptance Criteria:
  - Reset link (expires in 1 hour)
  - Security note
  - Support contact

### Track D: Configuration

**B05-D-01: Update Environment Configuration**
- Files: `.env.example`
- Description: Add all new environment variables
- Acceptance Criteria:
  - DATABASE_URL
  - NEXTAUTH_SECRET and NEXTAUTH_URL
  - All variables documented

**B05-D-02: Configure Rate Limiting**
- Files: `src/lib/rateLimiter.ts`
- Description: Proper rate limiting implementation
- Acceptance Criteria:
  - In-memory or Redis-based limiter
  - Configurable per endpoint
  - Headers in response

**B05-D-03: Create API Error Handling**
- Files: `src/lib/apiErrors.ts`
- Description: Standard error response format
- Acceptance Criteria:
  - ApiError class
  - Standard response format
  - Error logging

**B05-D-04: Create Prisma Seeding Script**
- Files: `prisma/seed.ts`
- Description: Seed data for development
- Acceptance Criteria:
  - Sample cohort data
  - Test registrations
  - npm run db:seed works

---

## BATCH 06: Core Infrastructure Expansion

**Purpose:** Expand API routes and design system for portal.

### Track A: API Route Expansion

**B06-A-01: Migrate Registration to Database**
- Files: `src/app/api/bootcamp/registrations/route.ts`
- Description: Store registrations in PostgreSQL
- Acceptance Criteria:
  - POST creates database record
  - GET retrieves registrations
  - Stripe metadata synced

**B06-A-02: Migrate Quiz Submissions to Database**
- Files: `src/app/api/quiz/submissions/route.ts`
- Description: Store quiz results in PostgreSQL
- Acceptance Criteria:
  - POST creates QuizResult record
  - Prevents duplicate submissions

**B06-A-03: Migrate Waitlist to Database**
- Files: `src/app/api/waitlist/route.ts`
- Description: Store waitlist in PostgreSQL
- Acceptance Criteria:
  - POST creates WaitlistEntry
  - Position auto-assigned

**B06-A-04: Create Cohort Availability API**
- Files: `src/app/api/bootcamp/cohorts/[cohortId]/availability/route.ts`
- Description: Real-time seat count
- Acceptance Criteria:
  - Returns seats remaining
  - Updates on registration

### Track B: Design System Expansion

**B06-B-01: Create Additional UI Components**
- Files: `src/components/ui/`
- Description: Components needed for portal
- Acceptance Criteria:
  - Modal component
  - Tabs component
  - Dropdown component
  - Avatar component

**B06-B-02: Create Form Components**
- Files: `src/components/ui/`
- Description: Form-specific components
- Acceptance Criteria:
  - Select component
  - Textarea component
  - Checkbox component
  - Radio component

**B06-B-03: Create Data Display Components**
- Files: `src/components/ui/`
- Description: Components for displaying data
- Acceptance Criteria:
  - Table component
  - Badge variants
  - Stat card component

### Track C: Development Tools

**B06-C-01: Set Up Jest Testing**
- Files: `jest.config.js`, `package.json`
- Description: Configure testing framework
- Acceptance Criteria:
  - Jest configured for Next.js
  - Testing utilities installed
  - Sample tests pass

**B06-C-02: Create GitHub Actions CI**
- Files: `.github/workflows/ci.yml`
- Description: Automated testing pipeline
- Acceptance Criteria:
  - Runs on PR to main
  - Runs lint, type check, tests
  - Fails on errors

---

# PHASE 3: ALUMNI PORTAL (Post-Launch)

**Goal:** Build protected alumni portal with subscription access.

---

## BATCH 07: Portal Authentication

**Purpose:** Login, protected routes, and subscription management.

### Track A: Login & Sessions

**B07-A-01: Create Login Page**
- Files: `src/app/login/page.tsx`
- Description: Email/password login
- Acceptance Criteria:
  - Login form
  - Error handling
  - Redirect to portal

**B07-A-02: Create Portal Signup Page**
- Files: `src/app/portal/signup/page.tsx`
- Description: Account creation from invitation
- Acceptance Criteria:
  - Token validation
  - Password creation
  - Auto-login

**B07-A-03: Create Protected Route Middleware**
- Files: `src/middleware.ts`
- Description: Protect /portal routes
- Acceptance Criteria:
  - Auth check
  - Subscription check
  - Redirects

### Track B: Password Management

**B07-B-01: Create Forgot Password Flow**
- Files: `src/app/forgot-password/page.tsx`, `src/app/api/auth/forgot-password/route.ts`
- Description: Password reset request
- Acceptance Criteria:
  - Email input
  - Token generation
  - Email sending

**B07-B-02: Create Reset Password Page**
- Files: `src/app/reset-password/page.tsx`, `src/app/api/auth/reset-password/route.ts`
- Description: Set new password
- Acceptance Criteria:
  - Token validation
  - Password update
  - Redirect to login

### Track C: Subscription Management

**B07-C-01: Create Subscription API**
- Files: `src/app/api/subscriptions/route.ts`
- Description: Stripe subscription endpoints
- Acceptance Criteria:
  - Create subscription ($500/month)
  - Get status
  - Cancel subscription

**B07-C-02: Create Billing Page**
- Files: `src/app/portal/billing/page.tsx`
- Description: Subscription management UI
- Acceptance Criteria:
  - Current status
  - Cancel option
  - Update payment method

**B07-C-03: Handle Subscription Webhooks**
- Files: `src/app/api/webhooks/stripe/route.ts`
- Description: Subscription lifecycle events
- Acceptance Criteria:
  - subscription.created/updated/deleted
  - Payment failed handling
  - Database updates

---

## BATCH 08: Portal Features

**Purpose:** Content library, updates, community, profile.

### Track A: Content Library

**B08-A-01: Set Up Sanity CMS**
- Files: `sanity.config.ts`, `src/lib/sanity.ts`
- Description: Configure Sanity for portal content
- Acceptance Criteria:
  - Sanity client initialized
  - GROQ query utilities

**B08-A-02: Create Library Page**
- Files: `src/app/portal/library/page.tsx`
- Description: Browse portal resources
- Acceptance Criteria:
  - Category filters
  - Search
  - Resource cards

**B08-A-03: Create Resource Detail Page**
- Files: `src/app/portal/library/[slug]/page.tsx`
- Description: Full resource view
- Acceptance Criteria:
  - Content display
  - Download option
  - Related resources

### Track B: Updates & Community

**B08-B-01: Create Updates Page**
- Files: `src/app/portal/updates/page.tsx`
- Description: Monthly update articles
- Acceptance Criteria:
  - Article list
  - Pagination
  - Featured update

**B08-B-02: Create Community Page**
- Files: `src/app/portal/community/page.tsx`
- Description: Discussion forum
- Acceptance Criteria:
  - Thread list
  - Create thread
  - Reply functionality

### Track C: User Profile

**B08-C-01: Create Profile Page**
- Files: `src/app/portal/profile/page.tsx`
- Description: User profile management
- Acceptance Criteria:
  - View/edit profile
  - Notification preferences
  - Change password

**B08-C-02: Create Dashboard Page**
- Files: `src/app/portal/page.tsx`
- Description: Portal landing page
- Acceptance Criteria:
  - Welcome message
  - Recent resources
  - Activity stats

### Track D: Portal Layout

**B08-D-01: Create Portal Layout**
- Files: `src/app/portal/layout.tsx`
- Description: Shared portal layout
- Acceptance Criteria:
  - Sidebar navigation
  - User menu
  - Subscription status

---

## BATCH 09: Admin Dashboard

**Purpose:** Admin interface for managing registrations and cohorts.

### Track A: Admin Layout & Auth

**B09-A-01: Create Admin Layout**
- Files: `src/app/admin/layout.tsx`
- Description: Admin-only layout
- Acceptance Criteria:
  - Admin role check
  - Admin navigation
  - Logout

### Track B: Registration Management

**B09-B-01: Create Registrations Page**
- Files: `src/app/admin/registrations/page.tsx`
- Description: View all registrations
- Acceptance Criteria:
  - Table with filters
  - Status management
  - Export CSV

**B09-B-02: Create Cohort Management**
- Files: `src/app/admin/cohorts/page.tsx`
- Description: Manage bootcamp cohorts
- Acceptance Criteria:
  - Create/edit cohorts
  - View attendees
  - Revenue stats

### Track C: Analytics

**B09-C-01: Create Analytics Dashboard**
- Files: `src/app/admin/page.tsx`
- Description: Admin homepage with metrics
- Acceptance Criteria:
  - KPI cards
  - Charts
  - Recent activity

---

# PHASE 4: SECURITY & POLISH

**Goal:** Security audit and final polish before production.

---

## BATCH 10: Security Audit

**Purpose:** Comprehensive security review.

### Track A: API Security

**B10-A-01: API Security Review**
- All API routes validated
- Input validation
- Rate limiting verified

### Track B: Auth Security

**B10-B-01: Authentication Audit**
- Session security
- Password policy
- CSRF protection

### Track C: Dependency Security

**B10-C-01: Dependency Scan**
- npm audit
- Update vulnerable packages
- License review

### Track D: Infrastructure

**B10-D-01: Security Headers**
- CSP configured
- HSTS enabled
- All headers verified

---

## BATCH 11: Polish & Launch

**Purpose:** Final testing and deployment.

### Track A: Testing

**B11-A-01: E2E Testing**
- Critical flow tests
- Cross-browser testing
- Accessibility audit

### Track B: Performance

**B11-B-01: Performance Optimization**
- Lighthouse 90+
- Image optimization
- Bundle analysis

### Track C: Deployment

**B11-C-01: Production Setup**
- Environment variables
- Database migration
- DNS configuration

**B11-C-02: Monitoring**
- Error tracking
- Uptime monitoring
- Analytics verification

---

## Task Count Summary

| Phase | Batches | Tasks | Focus |
|-------|---------|-------|-------|
| Phase 1 | B01-B04 | ~45 | Conversion Funnel |
| Phase 2 | B05-B06 | ~30 | Infrastructure |
| Phase 3 | B07-B09 | ~35 | Alumni Portal |
| Phase 4 | B10-B11 | ~20 | Security & Polish |
| **TOTAL** | 11 | ~130 | |

---

**End of Backlog**
