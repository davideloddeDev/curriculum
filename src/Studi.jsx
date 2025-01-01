import './Studi/css/studi.css'
import {Hero} from "./Studi/Hero.jsx";
import {Title} from "./Studi/Title.jsx";
import {Develhope} from "./Studi/Develhope.jsx";
import {IT} from "./Studi/IT.jsx";
import {Udemy} from "./Studi/Udemy.jsx";
import {Diploma} from "./Studi/Diploma.jsx";
import { Carosello } from './components/Carosello';

export function Studi() {
    return (
        <div className="studiContainer">
            <Hero />
            <Title />
            <Carosello>
                <Develhope />
                <IT />
                <Udemy />
                <Diploma />
            </Carosello>
        </div>
    )
}