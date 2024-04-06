import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Home";

export function Href(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}