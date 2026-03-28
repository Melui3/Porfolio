import { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center gap-6 px-6 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 font-semibold">Erreur</p>
                    <h1 className="font-display text-4xl text-zinc-100">Quelque chose a mal tourné.</h1>
                    <p className="text-zinc-400">Recharge la page ou reviens plus tard.</p>
                    <button
                        onClick={() => window.location.replace("/")}
                        className="h-11 px-6 rounded-[14px] bg-red-500 text-zinc-100 font-semibold transition hover:bg-red-600"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function App() {
    return (
        <HashRouter>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ErrorBoundary>
        </HashRouter>
    );
}
