import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Sparkles,
    ShieldCheck,
    Rocket,
    Layers,
    Compass,
    ScrollText,
    Code2,
} from "lucide-react";

const Container = ({ children }) => (
    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">{children}</div>
);

/* =========================================================
   SIGIL — ABOUT VISUAL
   - Variante plus “stable / méthode” que le Sigil du hero
   - 100% CSS, thème sin’dorei (rings + nodes + glow)
========================================================= */
function AboutSigil() {
    return (
        <div className="relative h-[460px] w-[460px] animate-slow-rotate">
            {/* rings */}
            <div className="absolute inset-0 rounded-full border border-amber-300/20" />
            <div className="absolute inset-10 rounded-full border border-amber-300/10" />
            <div className="absolute inset-24 rounded-full border border-red-500/10" />

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/16 via-transparent to-amber-300/16 blur-3xl animate-pulse-soft" />

            {/* shimmer sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute -left-1/2 top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-amber-300/8 to-transparent animate-[shimmer_4.8s_ease-in-out_infinite]" />
            </div>

            {/* core */}
            <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-[210px] w-[210px] opacity-[0.25]">
                    {/* cross */}
                    <div className="absolute left-1/2 top-[12%] h-[76%] w-[2px] -translate-x-1/2 rounded bg-amber-300/90" />
                    <div className="absolute top-1/2 left-[12%] w-[76%] h-[2px] -translate-y-1/2 rounded bg-amber-300/70" />

                    {/* center node */}
                    <div className="absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-300" />

                    {/* orbit nodes */}
                    <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300/60 shadow-[0_0_18px_rgba(252,211,77,0.25)]" />
                    <div className="absolute left-1/2 bottom-2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-300/45 shadow-[0_0_18px_rgba(252,211,77,0.18)]" />
                    <div className="absolute top-1/2 left-2 h-2 w-2 -translate-y-1/2 rounded-full bg-red-400/45 shadow-[0_0_18px_rgba(248,113,113,0.18)]" />
                    <div className="absolute top-1/2 right-2 h-2 w-2 -translate-y-1/2 rounded-full bg-red-400/35 shadow-[0_0_18px_rgba(248,113,113,0.14)]" />
                </div>

                {/* inner badge */}
                <div className="absolute h-20 w-20 rounded-full border border-amber-300/25 bg-zinc-950/50 backdrop-blur-sm grid place-items-center shadow-[0_0_40px_rgba(239,68,68,0.10)]">
                    <ScrollText className="h-8 w-8 text-amber-200/90" />
                </div>
            </div>
        </div>
    );
}

function Pill({ icon: Icon, children }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-xs font-semibold text-zinc-300">
            <Icon className="h-4 w-4 text-amber-300/90" />
            {children}
        </span>
    );
}

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <Header />

            <main>
                {/* =========================================================
                   HERO — 2 colonnes (texte + sigil)
                ========================================================= */}
                <section className="relative py-28 overflow-hidden">
                    {/* ambient */}
                    <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1200px] h-[640px] bg-red-600/5 blur-[160px]" />
                    <div className="absolute right-[-260px] top-24 w-[640px] h-[640px] rounded-full border border-amber-300/5" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="text-center lg:text-left">
                                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 font-semibold">
                                    À propos
                                </p>

                                <h1 className="font-display mt-6 text-5xl md:text-6xl">
                                    Développer avec méthode.
                                </h1>

                                <div className="mt-6 h-[2px] w-24 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-amber-300 to-transparent" />

                                <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Je suis développeur full-stack spécialisé React et Django.
                                    Mon approche repose sur trois piliers : architecture claire,
                                    maintenabilité et efficacité.
                                </p>

                                <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
                                    <Pill icon={Layers}>Structure</Pill>
                                    <Pill icon={ShieldCheck}>Maintenable</Pill>
                                    <Pill icon={Rocket}>Efficace</Pill>
                                    <Pill icon={Sparkles}>UI/UX claire</Pill>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <div className="absolute -right-16 -top-16 h-[520px] w-[520px] rounded-full bg-amber-300/5 blur-3xl" />
                                <div className="animate-[floaty_6s_ease-in-out_infinite] transition duration-500 hover:scale-[1.02] hover:drop-shadow-[0_0_28px_rgba(252,211,77,0.18)]">
                                    <AboutSigil />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   MÉTHODE — 3 étapes (pro, lisible)
                ========================================================= */}
                <section className="relative py-28 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[980px] h-[520px] bg-amber-300/5 blur-[130px]" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Process
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Une méthode simple, efficace.
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                On évite le flou : scope clair, décisions rapides, livraison propre.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 md:grid-cols-3">
                            {[
                                {
                                    title: "1) Cadrage",
                                    desc: "Objectifs, contraintes, priorités. On définit un plan réaliste et actionnable.",
                                    Icon: Compass,
                                },
                                {
                                    title: "2) Conception",
                                    desc: "Architecture + UI cohérente. On construit une base stable avant d’accélérer.",
                                    Icon: Layers,
                                },
                                {
                                    title: "3) Livraison",
                                    desc: "Version utilisable, itérable, maintenable. Pas de code jetable.",
                                    Icon: Rocket,
                                },
                            ].map(({ title, desc, Icon }) => (
                                <div
                                    key={title}
                                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-12 text-center transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]"
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
                   CONTENU — Philosophie / Vision (tes cards, up propre)
                ========================================================= */}
                <section className="relative py-28 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-24 right-0 w-[700px] h-[460px] bg-red-500/5 blur-[140px]" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="mt-6 grid md:grid-cols-2 gap-16">
                            <div className="group relative border border-zinc-800 rounded-2xl p-12 bg-zinc-900/60 backdrop-blur-md transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
                                <h3 className="font-display text-2xl text-amber-300">Philosophie</h3>
                                <p className="mt-6 text-zinc-400 leading-relaxed">
                                    Chaque projet doit être structuré comme un système cohérent.
                                    Pas de bricolage, pas de dette technique inutile.
                                </p>

                                <div className="mt-10 grid gap-3">
                                    {["Clarté avant vitesse.", "Lisibilité avant complexité.", "Base solide avant features."].map((t) => (
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

                            <div className="group relative border border-zinc-800 rounded-2xl p-12 bg-zinc-900/60 backdrop-blur-md transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/80 via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
                                <h3 className="font-display text-2xl text-amber-300">Vision</h3>
                                <p className="mt-6 text-zinc-400 leading-relaxed">
                                    Concevoir des applications robustes et élégantes,
                                    capables d’évoluer sans tout reconstruire.
                                </p>

                                <div className="mt-10 grid gap-3">
                                    {["Architecture maintenable.", "UI/UX cohérente.", "Évolutivité sans douleur."].map((t) => (
                                        <div
                                            key={t}
                                            className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/35 px-4 py-3"
                                        >
                                            <div className="mt-1 h-2 w-2 rounded-full bg-red-400/55 shadow-[0_0_18px_rgba(248,113,113,0.16)]" />
                                            <p className="text-sm text-zinc-300">{t}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* =========================================================
                   LIVRABLES — concret (hyper pro)
                ========================================================= */}
                <section className="relative py-28 border-t border-zinc-900 overflow-hidden">
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-red-600/5 blur-[140px]" />
                    <div className="absolute inset-0 sindorei-noise pointer-events-none" />

                    <Container>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                                Livrables
                            </p>

                            <h2 className="font-display mt-6 text-4xl md:text-5xl text-zinc-100">
                                Du concret, pas des promesses.
                            </h2>

                            <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-red-500 via-amber-300 to-transparent" />

                            <p className="mt-6 text-zinc-400 text-lg">
                                Selon le projet, je fournis des livrables clairs et utilisables.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-10 md:grid-cols-3">
                            {[
                                { title: "UI/UX & composants", desc: "UI cohérente, responsive, composants réutilisables.", Icon: Sparkles },
                                { title: "Backend & API", desc: "Endpoints propres, logique métier claire, données structurées.", Icon: Code2 },
                                { title: "Architecture & qualité", desc: "Structure lisible, conventions, code maintenable.", Icon: ShieldCheck },
                            ].map(({ title, desc, Icon }) => (
                                <div
                                    key={title}
                                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-12 text-center transition duration-500 hover:border-amber-300/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]"
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
            </main>

            <Footer />
        </div>
    );
}