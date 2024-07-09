import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Home";
import {HeaderPages} from "./HeaderPages.jsx";
import {FooterPages} from "./FooterPages.jsx";

export function Href(){
    return(
        <>
            <HeaderPages />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <FooterPages/>
        </>

    )
}