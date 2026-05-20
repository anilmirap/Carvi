# DOMAIN_MODEL

## 1) Purpose
Define a shared domain language for Carvi MVP so product, design, and engineering teams use the same concepts and relationships.

## 2) Core Domain Entities

### 2.1 Workshop
Represents an independent service business using Carvi.

Key attributes (conceptual):
- Workshop identity (name, contact info)
- Operational metadata (active status, created date)

### 2.2 User
Represents a workshop staff account.

Key attributes:
- Identity (name, email/phone)
- Role
- Workshop membership
- Account status

### 2.3 Role
Represents permission profile.

MVP minimum roles:
- Owner/Admin
- Advisor
- Technician

### 2.4 Customer
Represents the vehicle owner/client served by the workshop.

Key attributes:
- Full name / business name
- Contact details
- Linked vehicles

### 2.5 Vehicle
Represents a customer vehicle serviced by workshop.

Key attributes:
- Plate number
- Brand/model/year
- VIN/chassis (if provided)
- Current owner (customer link)

### 2.6 WorkOrder
Represents a service job lifecycle.

Key attributes:
- Work order number/reference
- Vehicle
- Customer snapshot or link
- Status
- Assigned staff
- Created/opened/closed timestamps

### 2.7 ServiceLineItem
Represents labor/service operations in a work order.

Key attributes:
- Description
- Quantity
- Unit price/cost
- Totals

### 2.8 SparePart
Represents a stock-tracked part definition.

Key attributes:
- Part name/sku
- Stock quantity
- Unit cost/price

### 2.9 SparePartLineItem
Represents part usage in a work order.

Key attributes:
- Part reference
- Quantity
- Unit price/cost
- Totals

### 2.10 Quote
Represents proposed total for a work order before execution/finalization.

Key attributes:
- Related work order
- Total amount
- Approval status (draft/pending/approved/rejected)
- Approval decision metadata (who/when)

### 2.11 ServiceHistoryRecord
Represents completed service evidence for a vehicle.

Key attributes:
- Vehicle
- Work order reference
- Completed date
- Service + part summary

## 3) Relationship Overview
- One **Workshop** has many **Users**.
- One **Workshop** has many **Customers**.
- One **Customer** can have many **Vehicles**.
- One **Vehicle** can have many **WorkOrders** over time.
- One **WorkOrder** has many **ServiceLineItems**.
- One **WorkOrder** has many **SparePartLineItems**.
- One **WorkOrder** can have one active **Quote** (versioning optional post-MVP).
- Completed **WorkOrders** feed **ServiceHistoryRecord** for the linked vehicle.

## 4) Work Order Status Model (MVP Suggestion)
Suggested baseline states:
1. Draft
2. Open
3. Quote Pending Approval
4. Approved / In Progress
5. Completed
6. Closed
7. Cancelled

Note: Final naming may evolve, but transition logic must remain explicit and auditable.

## 5) Audit & Trust Metadata (Cross-Cutting)
For all critical entities and transitions, capture:
- Created at / updated at
- Created by / updated by
- Status change timestamps
- Approval decision actor and time

This metadata is required to deliver Carvi’s trust-layer promise.

## 6) Domain Rules (MVP-Level)
1. A work order must be linked to one vehicle.
2. A vehicle must be linked to one customer at a time (ownership history can be post-MVP).
3. Quote approval must be explicit before final completion where quote flow is used.
4. Service history records are generated from completed work orders; manual history edits should be restricted.
5. Role permissions must prevent unauthorized edits on approval-sensitive records.

## 7) Future Domain Expansion (Post-MVP)
- Warranty claims and policy rules
- Supplier/procurement model
- Multi-branch hierarchy
- Customer self-service/mobile interactions
- Attachments/media evidence for inspections and repairs
