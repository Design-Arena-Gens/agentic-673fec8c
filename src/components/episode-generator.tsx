"use client";

import { useMemo, useState } from "react";

export type Episode = {
  id: string;
  title: string;
  synopsis: string;
  location: string;
  conflict: string;
  challenge: string;
  reward: string;
};

type EpisodeGeneratorProps = {
  episodes: Episode[];
};

const improvPrompts = [
  "Filme un confessionnal où la Reine du Parmesan admet avoir truqué la râpe sacrée.",
  "Raconte comment la tempête de sel a transformé la villa en patinoire gastronomique.",
  "Mets en scène une alliance secrète entre la Mozza Mystique et le Gouda Rebelle.",
  "Décris la manière dont le jury humain réagit à la danse de la râpe laser.",
  "Imagine le journal télé de la Ferme Fromagère relatant la dernière élimination.",
];

export default function EpisodeGenerator({ episodes }: EpisodeGeneratorProps) {
  const [selectedId, setSelectedId] = useState(episodes[0]?.id ?? "");
  const [promptIndex, setPromptIndex] = useState(0);

  const selectedEpisode = useMemo(
    () => episodes.find((episode) => episode.id === selectedId) ?? episodes[0],
    [episodes, selectedId],
  );

  const handleRandomPrompt = () => {
    setPromptIndex((previous) => {
      const next = Math.floor(Math.random() * improvPrompts.length);
      return next === previous ? (next + 1) % improvPrompts.length : next;
    });
  };

  return (
    <section className="grid gap-6 rounded-3xl border border-amber-200/60 bg-white/80 p-8 shadow-xl shadow-amber-900/5 backdrop-blur">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Atelier scénaristique
        </p>
        <h2 className="text-3xl font-extrabold text-amber-900">
          Episodes réalité râpée
        </h2>
        <p className="max-w-3xl text-base text-amber-900/80">
          Sélectionne une intrigue pour dévoiler le script détaillé ou improvise
          ton propre tournage façon docu-réalité gastronomique.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:items-start">
        <nav className="flex flex-col gap-3">
          {episodes.map((episode) => {
            const isActive = episode.id === selectedEpisode?.id;
            return (
              <button
                key={episode.id}
                onClick={() => setSelectedId(episode.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-amber-500 bg-amber-100/80 shadow-lg shadow-amber-900/10"
                    : "border-amber-200/60 bg-white/40 hover:border-amber-400 hover:bg-amber-50/80"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Episode {episode.id}
                </span>
                <p className="mt-2 text-lg font-semibold text-amber-900">
                  {episode.title}
                </p>
                <p className="mt-1 text-sm text-amber-900/70">
                  {episode.location}
                </p>
              </button>
            );
          })}
        </nav>
        <article className="flex flex-col gap-4 rounded-3xl border border-amber-300/50 bg-amber-50/60 p-6 shadow-inner shadow-amber-900/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-amber-900">
                {selectedEpisode?.title}
              </h3>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
                {selectedEpisode?.location}
              </p>
            </div>
            <div className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 shadow">
              Conflit : {selectedEpisode?.conflict}
            </div>
          </div>
          <p className="text-base leading-relaxed text-amber-900/80">
            {selectedEpisode?.synopsis}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Challenge
              </h4>
              <p className="mt-2 text-sm text-amber-900/80">
                {selectedEpisode?.challenge}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Récompense
              </h4>
              <p className="mt-2 text-sm text-amber-900/80">
                {selectedEpisode?.reward}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white/70 p-4 shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                Alliances
              </h4>
              <p className="mt-2 text-sm text-amber-900/80">
                {selectedEpisode?.conflict.includes("alliance")
                  ? "Alliance instable"
                  : "Alliance secrète en coulisses"}
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-white via-amber-50 to-amber-100 p-5 shadow-inner">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-700">
                Impro live
              </h4>
              <button
                onClick={handleRandomPrompt}
                className="rounded-full border border-amber-400 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 transition hover:bg-amber-200"
              >
                Nouvelle idée
              </button>
            </div>
            <p className="text-sm text-amber-900">
              {improvPrompts[promptIndex]}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
