const overviewCards = [
  {
    title: "Operations dashboard",
    label: "MVP module",
    description: "Baseline structure for workshop-wide operational visibility.",
  },
  {
    title: "Core record flows",
    label: "Planned workflow",
    description: "Customer, vehicle, and work order journeys are mapped for incremental delivery.",
  },
  {
    title: "UI baseline",
    label: "Foundation ready",
    description: "Navigation, hierarchy, and shell patterns are prepared for upcoming modules.",
  },
  {
    title: "Trust-oriented UX",
    label: "Design principle",
    description: "Interface language emphasizes clarity, auditability, and operational confidence.",
  },
];

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Overview</p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Carvi Workshop Operations Platform
        </h2>
        <p className="max-w-3xl text-sm leading-6 text-zinc-600">
          This MVP shell establishes the interaction foundation for a serious, high-trust operations workspace for
          independent service workshops.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => (
          <article key={card.title} className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{card.label}</p>
            <h3 className="mt-2 text-base font-semibold text-zinc-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{card.description}</p>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-zinc-200 bg-white p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">Current build phase</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
          The current iteration focuses on interface structure and information architecture only. Data persistence,
          authentication, and operational workflows are intentionally deferred until the UI shell is fully stabilized.
        </p>
      </section>
    </section>
  );
}
