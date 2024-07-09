import './css/skills.css'
import {CardHome} from "./Card.jsx";


export function SkillsHome() {
    return(
        <div className="skillsHome">
            <h1>Skills</h1>
            <div className="containerCard">
                <CardHome
                    className="cardHome"
                    imageSrc="cardWeb.jpeg"
                    titleText="Web"
                    descriptionText="In questa sezione potrai scoprire le mie competenze come Junior Fullstack Web Developer"
                    link="https://www.google.com"/>
                <CardHome
                    className="cardHome"
                    imageSrc="cardAndroid.jpeg"
                    titleText="Android"
                    descriptionText="In questa sezione potrai scoprire le mie competenze come Senior Android Developer"
                    link="https://www.google.com"/>
                <CardHome
                    className="cardHome"
                    imageSrc="cardIOS.jpeg"
                    titleText="iOS"
                    descriptionText="In questa sezione potrai scoprire le mie competenze come Junior iOS Developer"
                    link="https://www.google.com"/>
            </div>

        </div>
    )
}