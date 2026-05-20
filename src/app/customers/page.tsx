export default function CustomersPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Customers</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Customer profiles will provide structured contact records and ownership relationships for workshop operations.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-medium text-zinc-900">Empty state</p>
        <p className="mt-2 text-sm text-zinc-600">
          Customer listing, profile forms, and customer-to-vehicle linking will be introduced in a dedicated data layer phase.
        </p>
      </div>
    </section>
  );
}
