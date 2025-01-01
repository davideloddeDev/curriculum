import './Lavori/css/lavori.css'
import Carousel from 'react-bootstrap/Carousel';
import {Hero} from "./Lavori/Hero.jsx";
import {Title} from "./Lavori/Title.jsx";
import {Hekolo} from "./Lavori/Hekolo.jsx";
import {StaiConMe} from "./Lavori/StaiConMe.jsx";
import {WebDesign} from "./Lavori/WebDesign.jsx";
import {Orabbit} from "./Lavori/Orabbit.jsx";

export function Lavori() {
    return(
        <div className="lavoriContainer">
            <Hero />
            <Title />
            <Carousel>
                <Carousel.Item>
                    <Hekolo />
                </Carousel.Item>
                <Carousel.Item>
                    <StaiConMe />
                </Carousel.Item>
                <Carousel.Item>
                    <WebDesign />
                </Carousel.Item>
                <Carousel.Item>
                    <Orabbit />
                </Carousel.Item>
            </Carousel>






        </div>
    )
}