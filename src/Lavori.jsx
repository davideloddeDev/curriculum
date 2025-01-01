import './Lavori/css/lavori.css'
import {Hero} from "./Lavori/Hero.jsx";
import {Title} from "./Lavori/Title.jsx";
import {Hekolo} from "./Lavori/Hekolo.jsx";
import {StaiConMe} from "./Lavori/StaiConMe.jsx";
import {WebDesign} from "./Lavori/WebDesign.jsx";
import {Orabbit} from "./Lavori/Orabbit.jsx";
import { Carosello } from './components/Carosello';

export function Lavori() {
    return(
        <div className="lavoriContainer">
            <Hero />
            <Title />
            <Carosello>
                <Hekolo />
                <StaiConMe />
                <WebDesign />
                <Orabbit />
            </Carosello>
        </div>
    )
}