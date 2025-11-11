type CastMember = {
  name: string;
  alias: string;
  specialty: string;
  dramaMove: string;
  quote: string;
};

type CastGridProps = {
  cast: CastMember[];
};

export default function CastGrid({ cast }: CastGridProps) {
  return (
    <section className="rounded-3xl border border-amber-200/60 bg-white/75 p-8 shadow-xl shadow-amber-900/5 backdrop-blur">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Distribution
        </p>
        <h2 className="text-3xl font-extrabold text-amber-900">
          Les stars du râpé
        </h2>
        <p className="max-w-3xl text-base text-amber-900/80">
          Chaque fromage apporte sa texture, son tempérament et son arme secrète
          dans cette télé-réalité qui se déroule en direct depuis la Ferme
          AOP-Stream.
        </p>
      </header>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cast.map((member) => (
          <article
            key={member.alias}
            className="relative overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-200/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-100/80 blur-3xl" />
            <div className="relative flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600">
                {member.alias}
              </span>
              <h3 className="text-2xl font-bold text-amber-900">
                {member.name}
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Spécialité&nbsp;: {member.specialty}
              </p>
              <p className="text-sm text-amber-900/80">
                Move dramatique&nbsp;: {member.dramaMove}
              </p>
              <blockquote className="mt-4 border-l-4 border-amber-400/60 pl-4 text-sm italic text-amber-900/70">
                &laquo;&nbsp;{member.quote}&nbsp;&raquo;
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
