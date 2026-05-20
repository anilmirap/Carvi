# TECHNICAL_ARCHITECTURE

## 1) Architecture Decision

For the Carvi MVP, we will use a **Next.js full-stack monorepo**.

This is preferred over splitting frontend and backend into separate repositories/services because Carvi is currently a focused MVP effort with a solo-founder-oriented execution model. A single full-stack codebase reduces overhead in setup, deployment coordination, cross-repo versioning, and local development. It allows faster iteration on product-critical workflows (onboarding, work orders, quote approvals, service history) where UI and domain logic evolve together.

A separate frontend/backend architecture can be introduced later, but only when there is clear product-market fit and/or operational scale pressure (team size, independent release cadence needs, performance isolation, or compliance boundary requirements).

## 2) Plain-Language Explanation

### What “full-stack monorepo” means
A full-stack monorepo means the website screens, backend logic, and supporting project files live in one repository and are deployed as one main application for MVP.

### Frontend
The frontend is what workshop users see and interact with in their browser (pages, forms, dashboards, statuses).

### Backend
The backend is the server-side logic that processes data, applies business rules, checks permissions, and communicates with the database.

### Database
The database is the system of record where workshop, customer, vehicle, work order, quote, and audit data are stored safely.

### ORM
An ORM (Object-Relational Mapper) is a developer tool that maps application code to database tables so data operations are safer and more consistent.

### Authentication
Authentication answers: “Who is this user?” (for example, verifying login identity).

### RBAC
RBAC (Role-Based Access Control) answers: “What is this user allowed to do?” based on role.

### Deployment
Deployment is the process of publishing the app so workshops can use it online.

## 3) Recommended Technology Baseline

The MVP baseline should use:

- **Next.js** (full-stack web framework)
- **TypeScript** (type-safe application code)
- **Tailwind CSS** (UI styling system)
- **shadcn/ui** (or equivalent component system for consistent UI primitives)
- **PostgreSQL** (relational database)
- **Prisma** (or equivalent ORM)
- **Managed authentication solution** (preferred over custom auth)
- **Vercel** (or similar managed deployment platform)

This stack optimizes for speed of execution, maintainability, and clear upgrade paths.

## 4) Authentication and Authorization Principle

- Do **not** build a custom password/session system from scratch unless explicitly approved in a future decision.
- Prefer a managed or well-maintained authentication solution with production-grade defaults.
- Enforce role-based authorization from day one.

Initial roles:

- `workshop_owner`
- `workshop_admin`
- `service_advisor`
- `technician`
- `customer`

### RBAC in simple terms
RBAC is a permissions map: each role gets a defined set of allowed actions. For example, a technician may update job execution details but should not have owner-level account or policy controls.

## 5) Domain and Business Logic Principle

- Keep business rules separate from UI components.
- Place domain logic in dedicated modules, not inside page rendering code.
- Work order status transitions must be validated explicitly.
- Quote approval must generate auditable approval records.
- Critical actions must always store actor identity and timestamp.

This ensures trust, traceability, and testability as first-class concerns.

## 6) Suggested Folder Structure (MVP)

```text
carvi/
├─ app/                         # Next.js routes, layouts, pages, route handlers
│  ├─ (auth)/
│  ├─ (dashboard)/
│  ├─ api/
│  └─ ...
├─ src/
│  ├─ modules/                  # Domain modules and business workflows
│  │  ├─ workshop/
│  │  ├─ customer/
│  │  ├─ vehicle/
│  │  ├─ work-order/
│  │  ├─ quote/
│  │  └─ service-history/
│  ├─ lib/                      # Shared infrastructure helpers (db, auth adapters, utils)
│  └─ ui/                       # Shared UI components/design primitives
├─ prisma/                      # Schema, migrations, seed scripts (when implementation starts)
├─ tests/                       # Unit, integration, and smoke e2e tests
└─ docs/                        # Additional architecture/decision records (optional)
```

Note: exact naming can be refined later, but separation of routing, domain logic, infrastructure, and UI should remain explicit.

## 7) Database Approach

Use **relational modeling** as the default strategy for MVP integrity and reporting clarity.

High-level entities:

- Workshop
- User
- Customer
- Vehicle
- WorkOrder
- ServiceLineItem
- SparePartLineItem
- Quote
- ServiceHistoryRecord
- AuditLog

The exact table schema, constraints, and indexes will be designed in a separate dedicated schema task.

## 8) Testing Approach

Keep testing lean but trust-focused:

- **Unit tests** for domain/business rules (status transitions, approval constraints, role checks).
- **Integration tests** for key database/API workflows.
- **Minimal end-to-end smoke tests** for critical journeys (create work order, approve quote, complete job, view history).

Goal: maximize confidence in correctness without overbuilding an early-stage test matrix.

## 9) Deployment Approach

- Ship a **single deployable application** for MVP.
- Use a **managed PostgreSQL** service.
- Manage secrets via **environment variables**.
- Do not hardcode secrets in repository code or config files.

## 10) First Implementation Sequence

1. Project scaffold
2. Auth/RBAC foundation
3. Workshop onboarding
4. Customer + vehicle management
5. Work order lifecycle
6. Quote approval
7. Service history
8. Basic dashboard

This sequence follows Carvi’s trust-first and operations-first delivery priorities.

## 11) Codex Workflow Rules

- Work in small pull requests.
- Do not push directly to `main`.
- Do not introduce unrelated technologies.
- Do not create mobile app code yet.
- Do not add marketplace features yet.
- Do not add payment features yet.
- Do not add AI features yet.

These rules protect MVP focus and reduce scope creep before operational foundations are complete.
