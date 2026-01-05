# AI3 Consulting Platform

Conversion-optimized platform for AI3 Consulting's 3-day AI Bootcamp offering, featuring interactive tools, alumni portal, and subscription-based content.

## Overview

This platform transforms the existing Next.js consulting website into a comprehensive bootcamp registration and alumni management system. Key features include:

- **Bootcamp Landing Page** - Conversion-optimized with scarcity indicators and social proof
- **ROI Calculator** - Interactive tool demonstrating potential business impact
- **High-Agency Quiz** - Big Five personality assessment with qualification scoring
- **Multi-Step Registration** - Stripe-powered payment processing with nonprofit scholarship pathway
- **Alumni Portal** - Subscription-based content library, monthly updates, and community forum
- **Admin Dashboard** - Registration management, cohort analytics, and waitlist tracking

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 3.x
- **Database:** PostgreSQL 15.x + Prisma ORM 5.x
- **Authentication:** NextAuth.js 4.x
- **Payments:** Stripe (latest API)
- **Email:** Resend
- **CMS:** Sanity.io 3.x
- **Hosting:** Vercel
- **File Storage:** AWS S3
- **Forms:** React Hook Form 7.x
- **Analytics:** Google Analytics 4

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **Docker** and Docker Compose (for local PostgreSQL)
- **npm** or **yarn**
- **Git**

### Required Accounts (for development)
- [Stripe](https://stripe.com) - Payment processing (test mode)
- [Resend](https://resend.com) - Transactional emails
- [Sanity.io](https://sanity.io) - Headless CMS
- [Vercel](https://vercel.com) - Deployment (optional for local dev)

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/ai3consulting/ai3-consulting-website.git
cd ai3-consulting
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file and configure:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```bash
# Generate NextAuth secret
openssl rand -base64 32

# Add to .env.local as NEXTAUTH_SECRET
```

**Critical Variables:**
- `DATABASE_URL` - PostgreSQL connection string (see Step 4)
- `NEXTAUTH_SECRET` - Random secret for session encryption
- `STRIPE_SECRET_KEY` - Stripe test mode secret key (sk_test_...)
- `RESEND_API_KEY` - Resend API key for emails

### 4. Start PostgreSQL Database

```bash
docker-compose up -d
```

Verify database is running:

```bash
docker ps
```

You should see `ai3-consulting-db` container running on port 5432.

### 5. Initialize Database

Run Prisma migrations to create tables:

```bash
npx prisma migrate dev
```

Open Prisma Studio to view database (optional):

```bash
npx prisma studio
```

### 6. Seed Database (Optional)

Populate with sample data for development:

```bash
npm run db:seed
```

This creates:
- Sample bootcamp cohort (February 2026)
- Test registrations (confirmed, pending, nonprofit)
- Quiz results (qualified and not qualified)
- Waitlist entries
- Portal user with active subscription

### 7. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run db:push` | Push schema changes to database (dev only) |
| `npm run db:migrate` | Create and apply database migration |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run db:seed` | Seed database with sample data |

## Project Structure

```
ai3-consulting/
├── public/                    # Static assets
│   ├── images/               # Images, logos, icons
│   └── downloads/            # PDFs and downloadable resources
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # NextAuth endpoints
│   │   │   ├── bootcamp/    # Registration, seats, ROI calculator
│   │   │   ├── quiz/        # Quiz submission and results
│   │   │   ├── portal/      # Alumni portal content
│   │   │   ├── subscriptions/ # Stripe subscription management
│   │   │   ├── admin/       # Admin endpoints
│   │   │   └── webhooks/    # Stripe webhook handler
│   │   ├── bootcamp/        # Bootcamp landing page
│   │   ├── portal/          # Alumni portal (protected)
│   │   │   ├── library/     # Content library
│   │   │   ├── updates/     # Monthly updates
│   │   │   ├── community/   # Discussion forum
│   │   │   └── profile/     # User profile
│   │   ├── admin/           # Admin dashboard (admin-only)
│   │   └── login/           # Authentication pages
│   ├── components/          # React components
│   │   ├── ui/             # Base UI components (Button, Input, Card)
│   │   ├── bootcamp/       # Bootcamp-specific components
│   │   ├── portal/         # Portal-specific components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── craft/          # Craft signal components (design elements)
│   ├── lib/                # Shared utilities
│   │   ├── auth.ts        # NextAuth configuration
│   │   ├── stripe.ts      # Stripe client
│   │   ├── db.ts          # Prisma client
│   │   └── email.ts       # Resend client
│   ├── utils/             # Utility functions
│   │   ├── roiCalculator.ts  # ROI calculation logic
│   │   ├── quizScoring.ts    # Quiz scoring
│   │   ├── validators.ts     # Zod validation schemas
│   │   └── formatters.ts     # Data formatting
│   ├── types/             # TypeScript type definitions
│   ├── emails/            # Email templates (react-email)
│   └── styles/            # Global styles
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Migration history
│   └── seed.ts           # Database seeding script
├── tests/
│   ├── unit/             # Unit tests
│   └── integration/      # Integration tests
├── .env.example          # Environment variable template
├── docker-compose.yml    # PostgreSQL container
├── backlog.md           # Development backlog
└── README.md            # This file
```

## Key Features & Routes

### Public Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, ROI calculator, quiz |
| `/bootcamp` | Full bootcamp landing page |
| `/calculator` | Standalone ROI calculator |
| `/quiz` | High-agency personality quiz |
| `/waitlist` | Waitlist signup page |
| `/about` | About page (founder story) |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/refund` | Refund policy |

### Protected Routes (Alumni Portal)

| Route | Description |
|-------|-------------|
| `/portal` | Dashboard |
| `/portal/library` | Content library (prompts, workflows, tutorials) |
| `/portal/library/[slug]` | Resource detail page |
| `/portal/updates` | Monthly update articles |
| `/portal/updates/[slug]` | Update detail page |
| `/portal/community` | Discussion forum |
| `/portal/community/[threadId]` | Thread detail |
| `/portal/profile` | User profile management |
| `/portal/billing` | Subscription management |

### Admin Routes (Admin-Only)

| Route | Description |
|-------|-------------|
| `/admin` | Analytics dashboard |
| `/admin/registrations` | Bootcamp registrations list |
| `/admin/cohorts` | Cohort management |
| `/admin/cohorts/[cohortId]` | Cohort detail and stats |
| `/admin/quiz-submissions` | Quiz results analytics |
| `/admin/waitlist` | Waitlist management |

## API Documentation

Full API specification available in `api-contract.yaml` (OpenAPI 3.0).

Key endpoints:

- **POST** `/api/bootcamp/registrations` - Create bootcamp registration
- **POST** `/api/quiz/submissions` - Submit quiz answers
- **POST** `/api/calculator/calculate` - Calculate ROI
- **POST** `/api/waitlist` - Add to waitlist
- **GET** `/api/portal/library` - List portal resources (authenticated)
- **POST** `/api/subscriptions` - Create portal subscription (authenticated)
- **GET** `/api/admin/registrations` - List registrations (admin-only)

Webhook:
- **POST** `/api/webhooks/stripe` - Stripe event handler (signature verified)

## Database Schema

Key models (see `prisma/schema.prisma` for full schema):

- **BootcampRegistration** - Bootcamp attendee registrations
- **Cohort** - Bootcamp cohorts with seat availability
- **QuizResult** - High-agency quiz submissions
- **WaitlistEntry** - Waitlist signups
- **PortalUser** - Alumni portal accounts (extends User)
- **PortalContent** - CMS content (synced from Sanity)
- **CommunityThread** - Forum discussions
- **CommunityReply** - Forum replies

## Stripe Integration

### Test Mode

Use Stripe test cards for development:

| Card Number | Scenario |
|-------------|----------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 9995` | Card declined |
| `4000 0025 0000 3155` | Requires authentication (3D Secure) |

Expiration: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits

### Webhooks

Configure Stripe webhook in Stripe Dashboard:
- **URL:** `https://your-domain.com/api/webhooks/stripe`
- **Events:** `payment_intent.succeeded`, `payment_intent.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- **Secret:** Add to `STRIPE_WEBHOOK_SECRET` in environment

Test webhooks locally with Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables in Vercel project settings
4. Deploy automatically on push to `main` branch

### Manual Deployment

```bash
npm run build
npm run start
```

### Database Migrations in Production

```bash
npx prisma migrate deploy
```

**Important:** Always backup production database before migrations.

## Troubleshooting

### Database Connection Issues

**Error:** `Can't reach database server`

**Solution:**
```bash
# Restart PostgreSQL container
docker-compose down
docker-compose up -d

# Check container logs
docker logs ai3-consulting-db
```

### Prisma Schema Issues

**Error:** `Schema needs migration`

**Solution:**
```bash
npx prisma migrate dev --name fix-schema
```

### Build Errors

**Error:** `Type error: ...`

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Documentation

- **Development Backlog:** `backlog.md` - Full project roadmap with 154 tasks across 11 batches
- **API Specification:** `api-contract.yaml` - Complete OpenAPI 3.0 spec
- **Frontend Design:** `frontend-design-spec.md` - Component library and design system
- **Product Requirements:** `PRD.md` - Detailed feature specifications
- **Research Brief:** `research-brief.md` - Competitive analysis and patterns

## Support

- **Email:** support@ai3consulting.com
- **Documentation:** See `/docs` directory
- **Backlog:** See `backlog.md` for development roadmap
- **API Spec:** See `api-contract.yaml`

## License

Proprietary - AI3 Consulting

---

**Version:** 2.0.0
**Last Updated:** January 5, 2026
