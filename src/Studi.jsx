import './Studi/css/studi.css'
import {Hero} from "./Studi/Hero.jsx";
import {Title} from "./Studi/Title.jsx";
import {Develhope} from "./Studi/Develhope.jsx";
import {IT} from "./Studi/IT.jsx";
import {Udemy} from "./Studi/Udemy.jsx";
import {Diploma} from "./Studi/Diploma.jsx";
import Carousel from 'react-bootstrap/Carousel';

export function Studi() {
    return (
        <div className="studiContainer">
            <Hero />
            <Title />
            <Carousel>
                <Carousel.Item>
                    <Develhope />
                </Carousel.Item>
                <Carousel.Item>
                    <IT/>
                </Carousel.Item>
                <Carousel.Item>
                    <Udemy/>
                </Carousel.Item>
                <Carousel.Item>
                    <Diploma/>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}