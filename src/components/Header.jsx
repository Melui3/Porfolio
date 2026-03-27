import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

                {/* Logo → Home */}
                <Link to="/">
                    <img
                        src="/Logal.png"
                        alt="Logo Melui"
                        className="h-10 w-auto transition duration-200 hover:scale-105"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
                    <Link to="/" className="transition hover:text-amber-300">
                        Accueil
                    </Link>

                    <Link to="/projets" className="transition hover:text-amber-300">
                        Projets
                    </Link>
                    <Link to="/about" className="transition hover:text-amber-300">
                        À propos
                    </Link>
                </nav>

                {/* CTA → scroll contact */}
                <div className="hidden md:block">
                    <button
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="h-11 rounded-[14px] border border-amber-300/35 px-5 text-sm font-semibold text-amber-300 transition hover:border-amber-300 hover:bg-amber-300/10"
                    >
                        Me contacter
                    </button>
                </div>

                {/* Mobile button */}
                <button
                    className="md:hidden text-zinc-300"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
                    <div className="flex flex-col gap-6 px-6 py-8 text-zinc-300">
                        <Link to="/">Accueil</Link>
                        <Link to="/projets">Projets</Link>
                        <Link to="/about">À propos</Link>
                        <button
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="mt-4 h-11 rounded-[14px] bg-red-500 text-sm font-semibold text-zinc-100"
                        >
                            Me contacter
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}