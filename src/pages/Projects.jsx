import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    ExternalLink,
    Github,
    Flame,
    Sparkles,
    Swords,
    Filter,
    RotateCcw,
    Figma,
    Code2,
    Shield,
    Compass,
} from "lucide-react";

const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-[1600px] px-6 lg:px-16 ${className}`}>
        {children}
    </div>
);

const PROJECTS = [
    {
        id: "f1-manager-2026",
        title: "F1 Manager 2026",
        status: "Live / en cours",
        desc: "Simulation de saison : logique de course, gestion d’équipe, résultats et données structurées.",
        tags: ["React", "Tailwind", "Django", "API REST", "SQLite"],
        category: "Full-stack",
        links: {
            live: "https://melui3.github.io/F1-Manager-2026/",
            github: "https://github.com/Melui3/F1-Manager-2026",
            figma: "https://www.figma.com/design/uLI7jNN9zGG8LQtnhomwBV/F1-SIM?node-id=0-1&t=7HT6lQ4v2cgJFWQy-1",
        },
        preview: { icon: "swords", accent: "red" },
    },
    {
        id: "mindlap",
        title: "MINDLAP",
        status: "Concept / build",
        desc: "App mental-performance : onboarding, suivi, modules, et UX claire.",
        tags: ["React", "Tailwind", "Django", "API REST", "SQLite"],
        category: "Full-stack",
        links: { live: "", github: "", figma: "" },
        preview: { icon: "sparkles", accent: "amber" },
    },
    {
        id: "athanaerie",
        title: "Athanarië",
        status: "Roadmap",
        desc: "Univers interactif : cartes, entités, lore, et backend orienté données.",
        tags: ["React", "Tailwind", "Django", "API REST", "SQLite"],
        category: "Full-stack",
        links: { live: "", github: "", figma: "" },
        preview: { icon: "flame", accent: "amber" },
    },
    {
        id: "quiz-wow",
        title: "Quizz World of Warcraft",
        status: "Mini-projet",
        desc: "Quizz thématique WoW : questions, score, UI claire et responsive.",
        tags: ["React", "Tailwind"],
        category: "Front-end",
        links: {
            live: "https://melui3.github.io/QuizzWow/",
            github: "https://github.com/Melui3/QuizzWow",
            figma: "",
        },
        preview: { icon: "shield", accent: "red" },
    },
    {
        id: "quiz-f1",
        title: "Quizz F1",
        status: "Mini-projet",
        desc: "Quizz F1 : logique de questions, scoring, UX simple et rapide.",
        tags: ["React", "Tailwind"],
        category: "Front-end",
        links: {
            live: "https://melui3.github.io/F1Quizz/",
            github: "https://github.com/Melui3/F1Quizz",
            figma: "",
        },
        preview: { icon: "swords", accent: "amber" },
    },
    {
        id: "quote-f1",
        title: "Random Quote Generator F1",
        status: "Mini-projet",
        desc: "Générateur de citations F1 : interface minimaliste, random, partage facile.",
        tags: ["React", "Tailwind"],
        category: "Front-end",
        links: {
            live: "https://melui3.github.io/RandomGeneratorF1/",
            github: "https://github.com/Melui3/RandomGeneratorF1",
            figma: "",
        },
        preview: { icon: "sparkles", accent: "red" },
    },
    {
        id: "bookhub",
        title: "BookHub",
        status: "Projet",
        desc: "Gestion bibliothèque : emprunts, stock, logique métier, API et données.",
        tags: ["Django", "API REST", "SQLite"],
        category: "Back-end",
        links: {
            live: "",
            github: "https://github.com/Melui3/Bookhub",
            figma: "https://www.figma.com/design/830JIR7t1GlY9VWDgQWuOi/Bookhub?node-id=0-1&t=y6OJvxLEWo9o4hPA-1",
        },
        preview: { icon: "code", accent: "amber" },
    },
    {
        id: "honeygroup",
        title: "HoneyGroup App (Stage)",
        status: "Stage",
        desc: "Projet stage : conception, écrans, structure, livrables et mise en place.",
        tags: ["React", "Tailwind", "Figma"],
        category: "Front-end",
        links: { 
            live: "https://honey-group-1.onrender.com/", 
            github: "https://github.com/Melui3/Honey_Group", 
            figma: "https://www.figma.com/design/imIKyGQ0qXbg77pqMhO035/Honey-Group-App?node-id=0-1&t=o2gP3Lc5tSGjs9Od-1" 
        },
        preview: { icon: "compass", accent: "amber" },
    },
];

const TYPE_FILTERS = ["Tous", "Full-stack", "Front-end", "Back-end"];
const TAG_FILTERS = ["Tous", "React", "Tailwind", "Django", "API REST", "SQLite", "Figma"];

function StatusIcon({ status }) {
    const s = status.toLowerCase();
    if (s.includes("live")) return <Swords className="h-4 w-4" />;
    if (s.includes("concept")) return <Sparkles className="h-4 w-4" />;
    return <Flame className="h-4 w-4" />;
}

function Chip({ active, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={[
                "h-10 px-4 rounded-full border text-xs font-semibold transition",
                "hover:-translate-y-[1px] hover:shadow-[0_0_24px_rgba(252,211,77,0.08)]",
                active
                    ? "border-amber-300/55 bg-amber-300/10 text-amber-200"
                    : "border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:border-amber-300/35 hover:bg-amber-300/5",
            ].join(" ")}
        >
            {children}
        </button>
    );
}

function ActionButton({ href, variant = "outline", icon: Icon, children }) {
    const base =
        "h-11 px-5 inline-flex items-center justify-center gap-2 rounded-[14px] text-sm font-semibold transition";
    const variants = {
        primary:
            "bg-red-500 text-zinc-100 hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]",
        outline:
            "border border-amber-300/35 text-amber-300 hover:border-amber-300 hover:bg-amber-300/10",
        subtle:
            "border border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:border-amber-300/40 hover:bg-amber-300/10",
    };

    if (!href) {
        return (
            <span className={[base, "border border-zinc-800 bg-zinc-950/30 text-zinc-500 cursor-not-allowed"].join(" ")}>
        {Icon ? <Icon className="h-4 w-4" /> : null}
                {children}
      </span>
        );
    }

    return (
        <a href={href} target="_blank" rel="noreferrer" className={[base, variants[variant]].join(" ")}>
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {children}
        </a>
    );
}

function ProjectPreview({ preview }) {
    const iconMap = {
        code: Code2,
        shield: Shield,
        sparkles: Sparkles,
        swords: Swords,
        compass: Compass,
        flame: Flame,
    };
    const Icon = iconMap[preview?.icon || "sparkles"];

    const accent =
        preview?.accent === "red"
            ? "from-red-600/22 via-transparent to-amber-300/18"
            : "from-amber-300/18 via-transparent to-red-600/18";

    return (
        <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
            <div className="absolute inset-0 sindorei-noise pointer-events-none" />

            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-amber-300/10" />
            <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full border border-red-500/10" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.12),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(252,211,77,0.10),transparent_60%)]" />

            <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-20 w-20 rounded-full border border-amber-300/25 bg-zinc-950/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.10)]">
                    <Icon className="h-8 w-8 text-amber-200/90" />
                    <div className="absolute -inset-6 rounded-full border border-amber-300/10 [mask-image:radial-gradient(black,transparent_65%)]" />
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [typeFilter, setTypeFilter] = useState("Tous");
    const [tagFilter, setTagFilter] = useState("Tous");
    const [animateKey, setAnimateKey] = useState(0);
    const location = useLocation();

    const filtered = useMemo(() => {
        return PROJECTS.filter((p) => {
            const okType = typeFilter === "Tous" || p.category === typeFilter;
            const okTag = tagFilter === "Tous" || p.tags.includes(tagFilter);
            return okType && okTag;
        });
    }, [typeFilter, tagFilter]);

    useEffect(() => {
        setAnimateKey((k) => k + 1);

        // Si on est arrivé via un hash (#id), on évite de forcer le scroll top
        if (location.hash) return;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [typeFilter, tagFilter, location.hash]);

    // Hash scroll (Home -> Projects#id)
    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.slice(1);

        // petit offset pour éviter que le header colle sur la card
        const HEADER_OFFSET = 110;

        const scrollToEl = () => {
            const el = document.getElementById(id);
            if (!el) return false;

            const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
            return true;
        };

        // 1) essaye tout de suite
        if (scrollToEl()) return;

        // 2) sinon, ré-essaye sur quelques frames (le temps que React rende)
        let tries = 0;
        const maxTries = 20;

        const tick = () => {
            tries += 1;
            if (scrollToEl() || tries >= maxTries) return;
            requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [location.hash, filtered.length]);

    const resetFilters = () => {
        setTypeFilter("Tous");
        setTagFilter("Tous");
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <Header />

            <main>
                {/* HERO */}
                <section className="relative overflow-hidden py-28">
                    <div className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 w-[1300px] h-[720px] bg-red-600/5 blur-[160px]" />
                    <div className="pointer-events-none absolute right-[-280px] top-24 w-[680px] h-[680px] rounded-full border border-amber-300/5" />
                    <div className="pointer-events-none absolute inset-0 sindorei-noise" />

                    <Container className="relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 font-semibold">
                                Réalisations
                            </p>

                            <h1 className="font-display mt-6 text-5xl md:text-6xl text-zinc-100">
                                Projets
                            </h1>

                            <div className="mt-6 h-[2px] w-24 mx-auto bg-gradient-to-r from-red-600 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Chaque projet, présenté clairement : contexte, stack, et livrables.
                            </p>

                            {/* Filters */}
                            <div className="mt-12 flex flex-col items-center gap-6">
                                <div className="flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 mr-2">
                    <Filter className="h-4 w-4 text-amber-300/70" />
                    Type :
                  </span>
                                    {TYPE_FILTERS.map((t) => (
                                        <Chip key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>
                                            {t}
                                        </Chip>
                                    ))}
                                </div>

                                <div className="flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 mr-2">
                    <Filter className="h-4 w-4 text-amber-300/70" />
                    Stack :
                  </span>
                                    {TAG_FILTERS.map((t) => (
                                        <Chip key={t} active={tagFilter === t} onClick={() => setTagFilter(t)}>
                                            {t}
                                        </Chip>
                                    ))}
                                </div>

                                <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                  <span className="text-sm text-zinc-400">
                    <span className="text-amber-200 font-semibold">{filtered.length}</span>{" "}
                      projet(s) affiché(s)
                  </span>

                                    <button
                                        onClick={resetFilters}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-amber-200"
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                        Réinitialiser
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* GRID */}
                <section className="relative py-28 border-t border-zinc-900 overflow-hidden">
                    <Container>
                        <div key={animateKey} className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                            {filtered.map((p, i) => (
                                <article
                                    id={p.id}
                                    key={p.id}
                                    style={{ animationDelay: `${i * 70}ms` }}
                                    className={[
                                        "group relative overflow-hidden rounded-2xl border border-zinc-800",
                                        "bg-gradient-to-b from-zinc-900/80 to-zinc-950",
                                        "transition-all duration-500 hover:border-amber-300/60 hover:-translate-y-3",
                                        "hover:shadow-[0_0_70px_rgba(220,38,38,0.12)]",
                                        "animate-[fadeUp_.45s_ease-out_both]",
                                    ].join(" ")}
                                >
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-amber-300 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                                    <div className="relative aspect-video border-b border-zinc-800 bg-zinc-950 overflow-hidden">
                                        <ProjectPreview preview={p.preview} />

                                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-zinc-950/60 px-3 py-1 text-xs font-semibold text-amber-300">
                                            <StatusIcon status={p.status} />
                                            {p.status}
                                        </div>

                                        <div className="absolute top-4 right-4 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs font-semibold text-zinc-300">
                                            {p.category}
                                        </div>
                                    </div>

                                    <div className="p-12 text-center">
                                        <h2 className="font-display text-2xl text-zinc-100">{p.title}</h2>
                                        <p className="mt-5 text-sm leading-relaxed text-zinc-400">{p.desc}</p>

                                        <div className="mt-8 flex flex-wrap justify-center gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/50 text-xs font-semibold text-zinc-300"
                                                >
                          {t}
                        </span>
                                            ))}
                                        </div>

                                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                                            <ActionButton href={p.links.live} variant="primary" icon={ExternalLink}>
                                                Live
                                            </ActionButton>

                                            <ActionButton href={p.links.github} variant="outline" icon={Github}>
                                                Code
                                            </ActionButton>

                                            <ActionButton href={p.links.figma} variant="subtle" icon={Figma}>
                                                Figma
                                            </ActionButton>
                                        </div>

                                        {!p.links.live && !p.links.github && !p.links.figma && (
                                            <p className="mt-6 text-xs text-zinc-500 italic">
                                                Liens disponibles prochainement
                                            </p>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="mt-16 text-center text-zinc-400">
                                Aucun projet ne correspond à ce filtre.
                            </div>
                        )}
                    </Container>
                </section>

                {/* CTA */}
                <section className="relative py-28 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-red-600/5 blur-[140px]" />

                    <Container>
                        <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-12 text-center overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-amber-300 to-transparent" />

                            <h3 className="font-display text-3xl text-zinc-100">Un projet en tête ?</h3>

                            <p className="mt-4 text-zinc-400 text-lg">
                                Je te réponds vite, avec une proposition claire et réaliste.
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:3d.nathaniel1@gmail.com"
                                    className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] bg-red-500 text-zinc-100 font-semibold transition hover:bg-red-600 hover:shadow-[0_0_26px_rgba(239,68,68,0.25)]"
                                >
                                    Me contacter
                                </a>

                                <Link
                                    to="/"
                                    className="h-12 px-6 inline-flex items-center justify-center rounded-[14px] border border-amber-300/35 text-amber-300 font-semibold transition hover:border-amber-300 hover:bg-amber-300/10"
                                >
                                    Retour à l’accueil
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </div>
    );
}