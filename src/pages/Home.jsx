import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Sparkles,
    ShieldCheck,
    Rocket,
    Code2,
    Layers,
    Compass,
    MessageCircle,
    Database,
    Wrench,
    ExternalLink,
    ScrollText, // ✅ utilisé dans MiniRune()
} from "lucide-react";

/* =========================================================
   Container
   - largeur “premium” (QHD), padding adapté
========================================================= */
const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-[1600px] px-6 lg:px-16 ${className}`}>
        {children}
    </div>
);

/* =========================================================
   Sigil (Hero)
   - visuel arcane 100% CSS (pas d’image)
   - rotation lente + glow doux
========================================================= */
function Sigil() {
    return (
        <div className="relative h-[520px] w-[520px] animate-slow-rotate">
            {/* RINGS */}
            <div className="absolute inset-0 rounded-full border border-amber-300/20" />
            <div className="absolute inset-12 rounded-full border border-amber-300/10" />

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 via-red-400/10 to-amber-300/20 blur-3xl animate-pulse-soft" />

            {/* CORE RUNES */}
            <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-[220px] w-[220px] opacity-[0.24]">
                    <div className="absolute left-1/2 top-[14%] h-[72%] w-[2px] -translate-x-1/2 rounded bg-amber-300" />
                    <div className="absolute left-1/2 top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-300" />

                    <div className="absolute left-1/2 top-[28%] h-[2px] w-[72px] -translate-x-1/2 rotate-[-35deg] rounded bg-amber-300/80" />
                    <div className="absolute left-1/2 top-[28%] h-[2px] w-[72px] -translate-x-1/2 rotate-[35deg] rounded bg-amber-300/80" />

                    <div className="absolute left-1/2 top-[72%] h-[2px] w-[72px] -translate-x-1/2 rotate-[35deg] rounded bg-amber-300/70" />
                    <div className="absolute left-1/2 top-[72%] h-[2px] w-[72px] -translate-x-1/2 rotate-[-35deg] rounded bg-amber-300/70" />

                    <div className="absolute left-[20%] top-1/2 h-[96px] w-[96px] -translate-y-1/2 rounded-full border-2 border-amber-300/50 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
                    <div className="absolute right-[20%] top-1/2 h-[96px] w-[96px] -translate-y-1/2 rounded-full border-2 border-amber-300/50 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />

                    <div className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300/60 shadow-[0_0_18px_rgba(252,211,77,0.25)]" />
                    <div className="absolute left-1/2 bottom-3 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300/45 shadow-[0_0_18px_rgba(252,211,77,0.18)]" />
                    <div className="absolute top-1/2 left-3 h-2 w-2 -translate-y-1/2 rounded-full bg-red-400/45 shadow-[0_0_18px_rgba(248,113,113,0.18)]" />
                    <div className="absolute top-1/2 right-3 h-2 w-2 -translate-y-1/2 rounded-full bg-red-400/35 shadow-[0_0_18px_rgba(248,113,113,0.14)]" />
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   MiniRune (À propos)
   - “remplace une image” : petit sceau décoratif
========================================================= */
function MiniRune() {
    return (
        <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border border-amber-300/25" />
            <div className="absolute inset-2 rounded-full border border-amber-300/10" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/16 via-transparent to-amber-300/14 blur-xl" />
            <div className="absolute inset-0 grid place-items-center">
                <div className="h-7 w-7 rounded-full border border-amber-300/25 bg-zinc-950/50 backdrop-blur-sm grid place-items-center">
                    <ScrollText className="h-4 w-4 text-amber-200/90" />
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   Featured (Home)
   - IDs = ancres de /projets#id
========================================================= */
const FEATURED = [
    {
        id: "f1-manager-2026",
        title: "F1 Manager 2026",
        status: "Live / en cours",
        desc: "Simulation de saison : logique de course, gestion d’équipe, résultats et données structurées.",
        tags: ["React", "Tailwind", "Django", "API REST", "SQLite"],
        previewLabel: "Aperçu — Simulation",
    },
    {
        id: "honey-group",
        title: "Honey Group",
        status: "Concept / build",
        desc: "Sitre vitrine pour du tourisme au Madagascar : design épuré, backend solide, et contenu facile à gérer.",
        tags: ["React", "Tailwind", "Django", "API REST", "PostgreSQL"],
        previewLabel: "Aperçu — Concept",
    },
    {
        id: "athanaerie",
        title: "Athanarië",
        status: "Roadmap",
        desc: "Univers interactif : cartes, entités, lore, et backend orienté données.",
        tags: ["React", "Tailwind", "Django", "API REST", "SQLite"],
        previewLabel: "Aperçu — World",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Layout */}
            <Header />

            <main>
                {/* =========================================================
                   1) HERO
                   - message + CTA + Sigil (visuel CSS)
                ========================================================= */}
                <section className="relative overflow-hidden min-h-[92vh] flex items-center py-28">
                    <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1300px] h-[720px] bg-red-600/5 blur-[160px]" />
                    <div className="absolute right-[-280px] top-24 w-[680px] h-[680px] rounded-full border border-amber-300/5" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-zinc-400 font-semibold">
                                    <Sparkles className="h-4 w-4 text-amber-300/80" />
                                    <span>Développeur full-stack • React • Django • UI/UX</span>
                                </div>

                                <div className="mt-5 h-[2px] w-24 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                                <h1 className="font-display mt-8 text-6xl md:text-7xl leading-[1.05] text-[#F2EBDD] max-w-3xl">
                                    Je conçois des applications nettes, rapides et belles.
                                </h1>

                                <p className="mt-7 text-lg text-zinc-400 max-w-xl">
                                    J’accompagne les petites structures avec des solutions claires, maintenables
                                    et livrées proprement — de l’interface au backend.
                                </p>

                                <div className="mt-7 flex flex-wrap justify-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs font-semibold text-zinc-300">
                                        <Rocket className="h-4 w-4 text-red-400/90" />
                                        Performance
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs font-semibold text-zinc-300">
                                        <ShieldCheck className="h-4 w-4 text-amber-300/90" />
                                        Fiabilité
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs font-semibold text-zinc-300">
                                        <Code2 className="h-4 w-4 text-zinc-200/80" />
                                        Clarté
                                    </span>
                                </div>

                                <div className="mt-12 flex flex-wrap justify-center gap-4">
                                    <Link
                                        to="/projets"
                                        className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] bg-red-500 text-zinc-100 font-semibold transition hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]"
                                    >
                                        Découvrir mes projets
                                    </Link>

                                    <a
                                        href="/cv-melui.pdf"
                                        download
                                        className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] border border-amber-300/35 text-amber-300 font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300/10 hover:shadow-[0_0_28px_rgba(252,211,77,0.10)]"
                                    >
                                        Télécharger mon CV
                                    </a>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <div className="absolute -right-20 -top-20 h-[620px] w-[620px] rounded-full bg-amber-300/5 blur-3xl" />
                                <div className="animate-[floaty_6s_ease-in-out_infinite] transition duration-500 hover:scale-[1.02] hover:drop-shadow-[0_0_28px_rgba(252,211,77,0.20)]">
                                    <Sigil />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   2) CE QUE J’APPORTE
                ========================================================= */}
                <section className="relative py-36 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1000px] h-[520px] bg-red-500/5 blur-[120px]" />
                    <div className="absolute right-[-220px] top-16 w-[520px] h-[520px] rounded-full border border-amber-300/5" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Collaboration
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Ce que j’apporte
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Un design élégant + une base solide. Tu gagnes du temps, tu évites la dette
                                technique, et ton produit reste évolutif.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Projets complets", desc: "Conception, front, backend, base de données — tout est cohérent et intégré.", Icon: Layers },
                                { title: "Solutions pragmatiques", desc: "Priorités claires, coût maîtrisé, livrables utilisables sans blabla.", Icon: Compass },
                                { title: "Architecture maintenable", desc: "Code propre, structuré, évolutif — pensé pour durer.", Icon: ShieldCheck },
                                { title: "Communication claire", desc: "Avancement lisible, décisions rapides, zéro flou.", Icon: MessageCircle },
                            ].map(({ title, desc, Icon }) => (
                                <div
                                    key={title}
                                    className="group relative bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-12 text-center transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(239,68,68,0.16)]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />

                                    <div className="mx-auto mb-8 relative w-16 h-16 flex items-center justify-center">
                                        <div className="absolute w-16 h-16 rounded-full bg-red-500/10 blur-xl group-hover:bg-red-500/20 transition duration-500" />
                                        <div className="relative w-12 h-12 rounded-full border border-amber-300/35 flex items-center justify-center transition group-hover:border-amber-300/55">
                                            <Icon className="h-5 w-5 text-amber-300 transition group-hover:scale-110" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-amber-300">{title}</h3>
                                    <p className="mt-5 text-zinc-400 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   3) SKILLS
                ========================================================= */}
                <section className="relative py-36 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-24 right-0 w-[700px] h-[460px] bg-red-500/5 blur-[140px]" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Compétences
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Stack & Expertise
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Stack moderne + méthodes propres, orientées livraison.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Frontend", Icon: Code2, skills: ["React", "Tailwind", "UI/UX", "Responsive"] },
                                { title: "Backend", Icon: Database, skills: ["Django", "API REST", "Logique métier", "Auth"] },
                                { title: "Architecture", Icon: ShieldCheck, skills: ["SQLite", "Modélisation", "Structuration", "Clean Code"] },
                                { title: "Outils", Icon: Wrench, skills: ["Git", "Vite", "Figma", "Déploiement"] },
                            ].map(({ title, Icon, skills }) => (
                                <div
                                    key={title}
                                    className="group relative bg-zinc-900/70 border border-zinc-800 rounded-2xl p-12 text-center transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />

                                    <div className="mx-auto mb-8 relative w-16 h-16 flex items-center justify-center">
                                        <div className="absolute w-16 h-16 rounded-full bg-red-500/10 blur-xl group-hover:bg-red-500/20 transition duration-500" />
                                        <div className="relative w-12 h-12 rounded-full border border-amber-300/35 flex items-center justify-center transition group-hover:border-amber-300/55">
                                            <Icon className="h-5 w-5 text-amber-300 transition group-hover:scale-110" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-amber-300">{title}</h3>

                                    <div className="mt-7 flex flex-wrap justify-center gap-2">
                                        {skills.map((s) => (
                                            <span
                                                key={s}
                                                className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/40 text-xs font-semibold text-zinc-300"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   4) PROJETS EN VEDETTE
                ========================================================= */}
                <section className="relative py-36 border-t border-zinc-900 overflow-hidden" id="projets">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-300/5 blur-[120px]" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Réalisations
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Projets en vedette
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Trois projets “vitrine” : structure, exécution, identité.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                            {FEATURED.map((p, i) => (
                                <article
                                    key={p.id}
                                    style={{ animationDelay: `${i * 70}ms` }}
                                    className="group relative bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(239,68,68,0.18)] animate-[fadeUp_.45s_ease-out_both]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />

                                    <div className="relative aspect-video bg-zinc-950 border-b border-zinc-800 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/14 via-transparent to-amber-300/14 opacity-90" />
                                        <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                                        <div className="absolute top-4 left-4">
                                            <span className="text-xs font-semibold text-amber-300 border border-amber-300/25 bg-zinc-950/60 px-3 py-1 rounded-full">
                                                {p.previewLabel}
                                            </span>
                                        </div>

                                        <div className="absolute top-4 right-4">
                                            <span className="text-xs font-semibold text-zinc-200 border border-zinc-700 bg-zinc-950/60 px-3 py-1 rounded-full">
                                                {p.status}
                                            </span>
                                        </div>

                                        <div className="absolute inset-0 grid place-items-center">
                                            <span className="text-zinc-500 text-sm">Aperçu</span>
                                        </div>
                                    </div>

                                    <div className="p-12 text-center">
                                        <h3 className="font-display text-2xl text-zinc-100">{p.title}</h3>

                                        <p className="mt-5 text-zinc-400 text-sm leading-relaxed">{p.desc}</p>

                                        <div className="mt-8 flex flex-wrap justify-center gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/40 text-xs font-semibold text-zinc-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                                            <Link
                                                to={`/projets#${p.id}`}
                                                className="h-11 px-5 inline-flex items-center justify-center gap-2 rounded-[14px] border border-amber-300/35 text-amber-300 font-semibold text-sm transition hover:border-amber-300 hover:bg-amber-300/10"
                                            >
                                                Voir le projet
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>

                                            <Link
                                                to="/projets"
                                                className="h-11 px-5 inline-flex items-center justify-center rounded-[14px] bg-red-500 text-zinc-100 font-semibold text-sm transition hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]"
                                            >
                                                Tous les projets
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   4.5) À PROPOS (mini)
                   - pas d’image : runes, rings, glow (comme le reste)
                   - CTA vers /about
                ========================================================= */}
                <section className="relative py-36 border-t border-zinc-900 overflow-hidden" id="a-propos">
                    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[980px] h-[520px] bg-amber-300/5 blur-[130px]" />
                    <div className="absolute left-[-220px] top-24 w-[520px] h-[520px] rounded-full border border-red-500/10" />
                    <div className="absolute right-[-180px] bottom-10 w-[520px] h-[520px] rounded-full border border-amber-300/10" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                À propos
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Une approche propre, orientée résultat.
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Je travaille comme un artisan : structure, lisibilité, et livraison.
                                Pas de poudre aux yeux — du concret, maintenable, et pensé pour évoluer.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 lg:grid-cols-2 items-stretch">
                            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-12">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent" />

                                <div className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full border border-amber-300/10" />
                                <div className="absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-amber-300/5" />
                                <div className="absolute -left-24 -bottom-24 h-[520px] w-[520px] rounded-full border border-red-500/10" />

                                <div className="relative flex items-center gap-6">
                                    <MiniRune />
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                            Philosophie
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold text-amber-300">
                                            Clarté, structure, maîtrise.
                                        </h3>
                                    </div>
                                </div>

                                <p className="mt-8 text-zinc-400 leading-relaxed">
                                    Je privilégie une architecture lisible, une UI propre, et une base technique stable.
                                    L’objectif : un produit qui reste simple à maintenir, à faire évoluer, et à livrer.
                                </p>

                                <div className="mt-10 grid gap-3">
                                    {[
                                        "Décisions rapides, scope clair.",
                                        "Composants réutilisables, UI cohérente.",
                                        "Code structuré, dette technique minimisée.",
                                    ].map((t) => (
                                        <div
                                            key={t}
                                            className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/35 px-4 py-3"
                                        >
                                            <div className="mt-1 h-2 w-2 rounded-full bg-amber-300/70 shadow-[0_0_18px_rgba(252,211,77,0.18)]" />
                                            <p className="text-sm text-zinc-300">{t}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-10">
                                {[
                                    {
                                        title: "Ce que tu peux attendre",
                                        desc: "Des échanges simples, un plan clair, et des livrables compréhensibles. Pas de zone grise.",
                                    },
                                    {
                                        title: "Ce que je refuse",
                                        desc: "Le flou, l’empilement de features inutiles, et le code jetable. On fait propre, point.",
                                    },
                                ].map((x) => (
                                    <div
                                        key={x.title}
                                        className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-12 transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
                                        <h4 className="text-xl font-semibold text-amber-300">{x.title}</h4>
                                        <p className="mt-5 text-zinc-400 leading-relaxed">{x.desc}</p>
                                    </div>
                                ))}

                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        to="/about"
                                        className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-[14px] border border-amber-300/35 text-amber-300 font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300/10"
                                    >
                                        Voir la page À propos
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>

                                    <Link
                                        to="/projets"
                                        className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] bg-red-500 text-zinc-100 font-semibold transition hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]"
                                    >
                                        Explorer les projets
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   5) CONTACT
                ========================================================= */}
                <section id="contact" className="relative py-36 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-500/5 blur-[120px]" />
                    <div className="absolute right-[-180px] top-10 w-[520px] h-[520px] rounded-full border border-amber-300/5" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Contact
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                On bosse ensemble ?
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Tu as une idée, un besoin, ou un budget à tenir ? Je réponds avec une proposition claire.
                            </p>
                        </div>

                        <div className="mt-16 mx-auto max-w-4xl">
                            <div className="relative bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-12 text-center overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent" />

                                <div className="grid gap-8 md:grid-cols-2 text-left">
                                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-7">
                                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                            Email
                                        </p>
                                        <p className="mt-3 text-zinc-100 font-semibold">3d.nathaniel1@gmail.com</p>
                                        <p className="mt-2 text-sm text-zinc-400">Le plus simple pour démarrer vite.</p>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-7">
                                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                            GitHub
                                        </p>
                                        <p className="mt-3 text-zinc-100 font-semibold">github.com/Melui3</p>
                                        <p className="mt-2 text-sm text-zinc-400">Code, projets, et avancement.</p>
                                    </div>
                                </div>

                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <a
                                        href="mailto:3d.nathaniel1@gmail.com"
                                        className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] bg-red-500 text-zinc-100 font-semibold transition hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]"
                                    >
                                        M’écrire
                                    </a>

                                    <a
                                        href="https://github.com/Melui3"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] border border-amber-300/35 text-amber-300 font-semibold transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-300/10"
                                    >
                                        Voir mon GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </div>
    );
}