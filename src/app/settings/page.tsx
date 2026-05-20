export default function SettingsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Settings</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Workshop-level configuration and policy controls will be centralized here in later MVP milestones.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">Module placeholder</p>
          <p className="mt-2 text-sm text-zinc-600">Role-aware settings panels are planned but intentionally not functional yet.</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5">
          <p className="text-sm font-medium text-zinc-900">Scope note</p>
          <p className="mt-2 text-sm text-zinc-600">Authentication, permission wiring, and persistence are out of scope for this shell refinement.</p>
        </div>
      </div>
    </section>
  );
}
