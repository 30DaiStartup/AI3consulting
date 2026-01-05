# AI3 Consulting Platform

AI Bootcamp website with registration, quiz, ROI calculator, and alumni portal

## Stack

**Phase 1 (Conversion Funnel):**
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Stripe (payments)
- Resend (transactional email)
- Vercel (hosting)

**Phase 2+ (Infrastructure & Portal):**
- PostgreSQL + Prisma ORM
- NextAuth.js (email/password auth)
- Sanity.io (portal content CMS)

## Structure

```
ai3-consulting/
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components (ui/, layout/, craft/)
│   └── lib/             # Utilities (auth, email, stripe, sanity)
├── prisma/              # Database schema + migrations
├── public/              # Static assets (images, fonts)
├── docs/                # OpenAPI spec
├── PRD.md               # Product requirements
├── backlog.md           # ~130 tasks, 4 phases (conversion-first)
├── api-contract.yaml    # 24 API endpoints
└── frontend-design-spec.md  # Design system + components
```

## Commands

```bash
# Install: npm install
# Dev server: npm run dev
# Build: npm run build
# Lint: npm run lint
# Database push: npx prisma db:push
# Database migrations: npx prisma migrate dev
# Prisma Studio: npx prisma studio
# Docker database: docker-compose up -d
```

## Key Patterns

- **Design tokens**: Metallic silver/gold palette (see frontend-design-spec.md)
- **Progressive disclosure**: Detailed specs in agent_docs/, not CLAUDE.md
- **Authentication**: NextAuth.js with Prisma adapter, JWT sessions
- **Protected routes**: /portal requires auth + active subscription
- **Admin routes**: Require admin role check
- **Rate limiting**: Public endpoints (100/15min), authenticated (1000/15min)
- **Error handling**: Standard format (code, message, details) per api-contract.yaml

## Documentation

Read relevant files from agent_docs/:
- architecture.md — Multi-service structure (Next.js + PostgreSQL + Stripe + Sanity)
- testing.md — Test strategy + commands
- api.md — 24 endpoints summary (full spec: api-contract.yaml)
- frontend.md — Design system + component architecture
- deployment.md — Docker local dev, Vercel production
