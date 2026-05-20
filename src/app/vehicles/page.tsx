export default function VehiclesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Vehicles</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Vehicle records will anchor service history, work orders, and ownership traceability in the MVP workflow.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-medium text-zinc-900">Foundation ready</p>
        <p className="mt-2 text-sm text-zinc-600">
          Plate, brand/model, year, and VIN fields are planned but not yet connected to persisted records.
        </p>
      </div>
    </section>
  );
}
