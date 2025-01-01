import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Home";
import {HeaderPages} from "./HeaderPages.jsx";
import {FooterPages} from "./FooterPages.jsx";
import {Anagrafica} from "./Anagrafica.jsx";
import {Studi} from "./Studi.jsx";
import {Lavori} from "./Lavori.jsx";
import {Contatti} from "./Contatti.jsx";

export function Href(){
    return(
        <>
            <HeaderPages />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/anagrafica" element={<Anagrafica/>} />
                    <Route path="/studi" element={<Studi />} />
                    <Route path="/lavori" element={<Lavori />} />
                    <Route path="/contatti" element={<Contatti />} />
                </Routes>
            </Router>
            <FooterPages/>
        </>

    )
}