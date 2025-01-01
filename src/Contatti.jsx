import './Contatti/css/contatti.css'
import {Hero} from "./Contatti/Hero.jsx";
import {Title} from "./Contatti/Title.jsx";
import {Contactform} from "./Contatti/Contactform.jsx";

export function Contatti() {
    return (
        <div className={"contattiContainer"}>
            <Hero />
            <Title />
            <Contactform />
        </div>
    )
}