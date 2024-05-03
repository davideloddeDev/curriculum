import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Anagrafici } from "./pages/Anagrafici";
import { Contatti } from "./pages/Contatti";
import { Lavori } from "./pages/Lavori";
import { Studi } from "./pages/Studi";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Href(){
    return(
        <>
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/anagrafici" element={<Anagrafici />} />
                <Route path="/studi" element={<Studi />} />
                <Route path="/lavori" element={<Lavori />} />
                <Route path="/contatti" element={<Contatti />} />
            </Routes>
        </Router>
        <Footer />
        </>
        
    )
}