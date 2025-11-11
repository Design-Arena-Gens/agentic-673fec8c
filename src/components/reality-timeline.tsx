type RealityEvent = {
  time: string;
  title: string;
  description: string;
};

type RealityTimelineProps = {
  events: RealityEvent[];
};

export default function RealityTimeline({ events }: RealityTimelineProps) {
  return (
    <section className="rounded-3xl border border-amber-200/60 bg-white/70 p-8 shadow-xl shadow-amber-900/5 backdrop-blur">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Jour de tournage
        </p>
        <h2 className="text-3xl font-extrabold text-amber-900">
          Planning de la villa râpée
        </h2>
        <p className="max-w-3xl text-base text-amber-900/80">
          Une journée sur le plateau de &laquo; Réalité Râpée &raquo; passe par
          des défis croustillants, des confessions salées et une élimination en
          direct sous le regard mordant des juges.
        </p>
      </header>
      <div className="mt-8 grid gap-6">
        {events.map((event) => (
          <article
            key={`${event.time}-${event.title}`}
            className="grid gap-4 rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-6 shadow-sm sm:grid-cols-[140px_1fr]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-amber-700">
                {event.time}
              </span>
              <span className="text-sm uppercase tracking-[0.3em] text-amber-600">
                Heure officielle
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900">{event.title}</h3>
              <p className="mt-2 text-sm text-amber-900/80">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
