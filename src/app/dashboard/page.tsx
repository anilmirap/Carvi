export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Dashboard</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          High-level operational monitoring area for open workloads, approvals, and completion flow health.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">MVP module placeholder</p>
          <p className="mt-2 text-sm text-zinc-600">Dashboard metrics and summaries will be added in later implementation phases.</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">Planned workflow</p>
          <p className="mt-2 text-sm text-zinc-600">Widgets will reflect trusted status transitions instead of synthetic demo-style values.</p>
        </div>
      </div>
    </section>
  );
}
