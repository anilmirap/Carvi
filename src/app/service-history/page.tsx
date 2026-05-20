export default function ServiceHistoryPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Service History</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Historical job evidence for each vehicle will be surfaced here after work order completion workflows are integrated.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-medium text-zinc-900">Empty-state panel</p>
        <p className="mt-2 text-sm text-zinc-600">
          No records are displayed yet; this screen currently defines structure for future traceability-focused listings.
        </p>
      </div>
    </section>
  );
}
