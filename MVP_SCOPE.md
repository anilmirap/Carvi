# MVP_SCOPE

## 1) Objective
Deliver a stable, operationally useful workshop web app that digitizes the most critical service workflows and establishes Carvi’s trust foundation.

## 2) MVP Boundary
**Channel:** Web application (workshop-facing)

**Out of initial MVP:** Customer mobile app, advanced marketplace behavior, deep financial/accounting suite, complex analytics.

## 3) In-Scope Features

### 3.1 Workshop Onboarding
- Create workshop profile
- Basic business identity and contact details
- Initial admin user setup

### 3.2 User Roles
- Role-based access model (minimum: Owner/Admin, Advisor, Technician)
- Permission boundaries for reading/updating operational records

### 3.3 Customer Management
- Customer profile creation and editing
- Contact details
- Customer-to-vehicle association

### 3.4 Vehicle Management
- Vehicle profile (plate, brand, model, year, VIN/chassis where available)
- Vehicle ownership linkage to customer
- Vehicle service history linkage

### 3.5 Work Order Management
- Open, update, and close work orders
- Assign responsible staff (where applicable)
- Track status transitions

### 3.6 Service Line Items
- Add labor/service operations to work orders
- Capture description, quantity, unit cost/price, totals

### 3.7 Spare Parts Line Items
- Add parts used in work orders
- Capture quantity and pricing
- Basic stock impact recording (reserve/use model at minimum)

### 3.8 Quote Approval Workflow
- Generate quote from service + parts lines
- Mark quote as pending approval
- Record approval/rejection with timestamp and actor

### 3.9 Service History
- Per-vehicle historical listing of completed work orders
- Visible service and part details from past jobs

### 3.10 Basic Dashboard
- High-level operational summary (example: open orders, pending approvals, recently completed jobs)

## 4) Out of Scope (MVP)
- Native customer mobile applications
- Multi-branch enterprise hierarchy complexity
- Real-time telematics/OBD integrations
- Advanced procurement workflows
- Full accounting/tax invoicing suite
- AI diagnostics/recommendation engine
- Dynamic marketplace ranking algorithms

## 5) Non-Functional Priorities (MVP)
- Reliable CRUD and workflow consistency
- Clear audit-friendly timestamps and actor records
- Role-based access correctness
- Data integrity across customer-vehicle-work-order relationships
- Usable, fast, low-friction interface for workshop daily operations

## 6) Acceptance Criteria (MVP-Level)
MVP is considered functionally ready when a pilot workshop can:
1. Onboard and create users with roles.
2. Create customers and vehicles.
3. Open work orders and add service + parts lines.
4. Produce and track quote approvals.
5. Complete jobs and view service history by vehicle.
6. Monitor basic operations from dashboard summaries.

## 7) Delivery Philosophy
Prefer correctness and operational trust over breadth.

If trade-offs are needed, prioritize:
1. Data integrity
2. Workflow clarity
3. Auditability
4. Interface polish
