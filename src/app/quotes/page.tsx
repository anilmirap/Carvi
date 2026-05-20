export default function QuotesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Quotes</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Quote preparation and approval visibility will support transparent service decisions for workshops and clients.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-medium text-zinc-900">Planned module</p>
        <p className="mt-2 text-sm text-zinc-600">
          Approval states, timestamps, and actor tracking are planned but not implemented in this scaffold iteration.
        </p>
      </div>
    </section>
  );
}
