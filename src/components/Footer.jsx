import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
                {/* Top grid */}
                <div className="grid gap-16 md:grid-cols-3">
                    {/* Col 1 — identité */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/Logal.png" alt="Logo Melui" className="h-10 w-auto" />
                            <span className="font-display text-xl tracking-wide text-amber-300">
                Melui
              </span>
                        </div>

                        <p className="mt-6 text-sm leading-relaxed text-zinc-400 max-w-[320px]">
                            Conçu avec précision. Développé avec exigence.
                        </p>

                        <a
                            href="mailto:ton.email@exemple.com"
                            className="mt-6 inline-block text-sm font-semibold text-amber-300 hover:text-amber-200 transition"
                        >
                            ton.email@exemple.com
                        </a>
                    </div>

                    {/* Col 2 — navigation */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                            Navigation
                        </p>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-300">
                            <Link className="hover:text-amber-300 transition" to="/">
                                Accueil
                            </Link>
                            <Link className="hover:text-amber-300 transition" to="/projets">
                                Projets
                            </Link>
                            <a className="hover:text-amber-300 transition" href="#contact">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Col 3 — liens */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                            Liens
                        </p>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-300">
                            <a
                                href="3d.nathaniel1@gmail.com"
                                className="hover:text-amber-300 transition"
                            >
                                Email
                            </a>

                            <a
                                href="https://github.com/Melui3"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-amber-300 transition"
                            >
                                GitHub
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-zinc-400">
                            Réponse rapide • Devis clair • Livraison propre
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 h-px w-full bg-zinc-800" />

                {/* Bottom bar */}
                <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-zinc-500">
                        © {new Date().getFullYear()} Melui. Tous droits réservés.
                    </p>

                    <p className="text-xs text-zinc-500">Fait avec React & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}