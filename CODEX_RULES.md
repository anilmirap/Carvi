# CODEX_RULES

## 1) Purpose
This document defines mandatory implementation and collaboration rules for all future code generation and development in this repository.

## 2) Phase Rule (Current)
At the current phase, the repository is documentation-first.

Until explicit approval:
- Do not add application source code.
- Do not install frameworks/packages.
- Do not scaffold placeholder code.

Only product/system documentation updates are allowed.

## 3) Product Alignment Rules
All future implementation must align with these statements:
- Carvi is a trust layer and operating system for independent workshops.
- MVP starts with workshop operations web app.
- Operational correctness and traceability are more important than feature breadth.

## 4) Documentation Dependency Rule
Before building any feature, contributors must verify consistency with:
1. `PRODUCT_BRIEF.md`
2. `MVP_SCOPE.md`
3. `DOMAIN_MODEL.md`
4. `ROADMAP.md`

If implementation conflicts with these documents, update documents first (with rationale) before coding.

## 5) Engineering Principles (When Coding Starts)
1. **Auditability first:** critical actions must be traceable.
2. **Data integrity first:** enforce valid relationships and state transitions.
3. **Role safety:** authorization must be explicit and testable.
4. **Clarity over cleverness:** prefer understandable, maintainable design.
5. **No silent behavior:** domain-critical events should be explicit.

## 6) MVP Build Priority Order
When coding begins, implement in this sequence unless explicitly changed:
1. Workshop onboarding + roles
2. Customer + vehicle management
3. Work orders
4. Service/parts line items
5. Quote approval workflow
6. Service history
7. Basic dashboard

## 7) Quality Expectations (When Coding Starts)
- Use consistent domain naming across backend/frontend.
- Keep business logic separated from presentation concerns.
- Add tests for critical domain rules and workflow transitions.
- Preserve migration safety for schema changes.
- Document assumptions and trade-offs in PRs.

## 8) Security & Compliance Baseline
- Apply least-privilege role access.
- Protect customer personal data appropriately.
- Keep operational records tamper-evident through audit metadata.
- Avoid storing sensitive data without clear purpose.

## 9) UX Behavior Baseline
- Use clear, deterministic status labels.
- Avoid ambiguous approval flows.
- Prefer explicit confirmation in high-impact actions.
- Surface key timestamps and responsible actor where relevant.

## 10) PR Hygiene Rules
Every future implementation PR should include:
- Scope summary
- Domain entities affected
- Workflow/status changes
- Authorization impacts
- Test evidence
- Known risks or deferred items
