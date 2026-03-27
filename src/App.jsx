import { HashRouter,Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
    return (
        <HashRouter>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/about" element={<About />} />
        </HashRouter>
    );
}