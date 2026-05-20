export default function WorkOrdersPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Work Orders</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Work order lifecycle management will coordinate intake, execution, quote flow, and completion records.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">Workflow placeholder</p>
          <p className="mt-2 text-sm text-zinc-600">Status states and transitions are reserved for a future domain implementation pass.</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">No functional actions yet</p>
          <p className="mt-2 text-sm text-zinc-600">Create, assign, and close actions are intentionally not active in this UI-shell stage.</p>
        </div>
      </div>
    </section>
  );
}
