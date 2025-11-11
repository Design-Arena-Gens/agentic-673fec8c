import GratedRealityStage from "@/components/grated-reality-stage";
import CastGrid from "@/components/cast-grid";
import EpisodeGenerator, {
  type Episode,
} from "@/components/episode-generator";
import RealityTimeline from "@/components/reality-timeline";
import type { Metadata } from "next";

const episodes: Episode[] = [
  {
    id: "01",
    title: "La Tempête de Pecorino",
    location: "Villa des 1000 râpes",
    synopsis:
      "Une panne électrique transforme la villa en club clandestin éclairé aux lampes à fromage. Les candidates improvisent une battle de râpage synchronisé pour sauver l’épisode pilote tout en gardant le live actif.",
    conflict:
      "Alliance secrète",
    challenge:
      "Râper 12 kilos de pecorino en duo sans faire tomber la râpe sacrée.",
    reward: "Immunité & Maillot doré à paillettes fondantes.",
  },
  {
    id: "02",
    title: "Confessionnal Croûte Fine",
    location: "Cabine confessionnelle 360°",
    synopsis:
      "Le confessionnal rotatif dévoile une trahison : le Comté Obscur aurait remplacé le parmesan officiel par un cheddar fluorescent importé. Les caméras captent chaque micro-émotion.",
    conflict:
      "Trahison révélée",
    challenge:
      "Réécrire un serment de camaraderie en moins de 90 secondes face au jury.",
    reward: "Carte joker permettant de remixer les duos avant la finale.",
  },
  {
    id: "03",
    title: "Bataille des Fondus",
    location: "Arena Fromagère ActiveX",
    synopsis:
      "Une épreuve immersive mélange réalité augmentée et jets de gruyère. Les teams doivent défendre leur territoire tout en esquivant les drones râpeurs contrôlés par les fans en direct.",
    conflict:
      "Territoire contesté",
    challenge:
      "Maintenir la fondue idéale à 63°C tout en livrant un confessionnal live.",
    reward: "Budget bonus pour customiser la suite fromagère VIP.",
  },
  {
    id: "04",
    title: "La Râpe Finale",
    location: "Plateau principal",
    synopsis:
      "En direct mondial, les finalistes mixent leurs univers pour produire un clip musical &laquo; reality-râpé &raquo; tourné en une seule prise. Les jurés humains et la foule holographique votent en simultané.",
    conflict:
      "Clash artistique",
    challenge:
      "Composer un refrain original en 3 minutes avec les bruits de râpe comme percussions.",
    reward: "Couronne de parmesan aérien et tournée streaming sur Vercel TV.",
  },
];

const cast = [
  {
    name: "Bianca Buffone",
    alias: "La Mozza Mystique",
    specialty: "Chorégraphies lactées",
    dramaMove: "Renversement de panier à la dernière seconde",
    quote:
      "Je suis douce en apparence, mais quand je file, tout le monde fond.",
  },
  {
    name: "Gaspard Veiné",
    alias: "Le Gouda Rebelle",
    specialty: "Beatbox râpé",
    dramaMove: "Confession surprise au micro du confessionnal",
    quote: "Ma croûte protège le crew, mon cœur râpé est prêt au clash.",
  },
  {
    name: "Séréna Ranci",
    alias: "Reine du Parmesan",
    specialty: "Stratégies de plateau",
    dramaMove: "Règles maison dévoilées en direct",
    quote:
      "Rien ne se perd, tout se râpe. Et surtout, rien ne m’échappe.",
  },
  {
    name: "Elliot Bleu Nuit",
    alias: "Le Bleu Hypnotique",
    specialty: "Synthés atmosphériques",
    dramaMove: "Twist romantique pendant le direct",
    quote: "Je compose des nuages qui sentent le lait cru.",
  },
  {
    name: "Mina Crouton",
    alias: "L’Emmental Hacker",
    specialty: "Réalité augmentée",
    dramaMove: "Dropping de drones parfumés",
    quote:
      "Je piraterai les votes avec un sourire croustillant.",
  },
  {
    name: "Rico Coulis",
    alias: "Le Ricotta Flow",
    specialty: "Freestyle cuisine",
    dramaMove: "Serveur renversé pour provoquer une élimination",
    quote: "Je rap, je râpe, je règne.",
  },
];

const timeline = [
  {
    time: "08:00",
    title: "Réveil musical au lait cru",
    description:
      "Les candidates sont plongées dans un bain sonore binaural pendant que les caméras captent les alliances murmurées.",
  },
  {
    time: "11:30",
    title: "Briefing holographique",
    description:
      "La productrice virtuelle lance le défi du jour avec des projections interactives et des votes en temps réel des spectateurs.",
  },
  {
    time: "14:00",
    title: "Défi principal",
    description:
      "Trois heures d’épreuve en continu, multi-angle, avec interventions imprévues du jury et du public connecté.",
  },
  {
    time: "18:45",
    title: "Confessionnaux croisés",
    description:
      "Les alliances vacillent dans un confessionnal panoramique de 6 caméras ; montage live diffusé en simultané sur Vercel TV.",
  },
  {
    time: "21:00",
    title: "Prime en direct",
    description:
      "Performance collective autour du thème 'Réalité Râpée'. Vote du jury et du public holographique, élimination dramatique.",
  },
];

export const metadata: Metadata = {
  title: "Réalité Râpée • Plateau interactif",
  description:
    "Découvre la télé-réalité immersive consacrée au râpé spectaculaire, produis ta scène et rejoins la villa des fromages stars.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-amber-100/60">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,214,153,0.45),rgba(255,196,120,0.35))]" />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12">
        <section className="grid gap-10 rounded-3xl border border-amber-200/60 bg-white/80 p-10 shadow-2xl shadow-amber-900/10 backdrop-blur">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
              Nouvelle télé-réalité gastronomique
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-amber-900 sm:text-5xl">
              Réalité Râpée
            </h1>
            <p className="mt-4 text-lg text-amber-900/80 sm:text-xl">
              Entre confessionnaux croustillants et défis lactés, plonge dans
              l’émission où les fromages prennent vie. Compose ton épisode, fais
              vibrer la villa et envoie le direct sur Vercel TV.
            </p>
          </header>
          <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center">
            <div className="rounded-3xl border border-amber-200 bg-white/70 p-6 shadow-lg shadow-amber-900/10">
              <h2 className="text-2xl font-bold text-amber-900">
                Live studio XR
              </h2>
              <ul className="mt-4 grid gap-3 text-sm text-amber-900/80">
                <li>
                  <span className="font-semibold text-amber-800">
                    16 caméras holo
                  </span>{" "}
                  pour capturer chaque râpé en 8K.
                </li>
                <li>
                  <span className="font-semibold text-amber-800">
                    Confessionnal 360°
                  </span>{" "}
                  relayé en streaming interactif.
                </li>
                <li>
                  <span className="font-semibold text-amber-800">
                    Plateau modulable
                  </span>{" "}
                  qui change de texture selon la température du fromage.
                </li>
              </ul>
            </div>
            <GratedRealityStage />
          </div>
        </section>
        <EpisodeGenerator episodes={episodes} />
        <CastGrid cast={cast} />
        <RealityTimeline events={timeline} />
      </main>
    </div>
  );
}
