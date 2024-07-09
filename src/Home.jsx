import {HeroHome} from "./Home/hero.jsx";
import {SkillsHome} from "./Home/Skills.jsx";

export function Home() {

    const style = {
        height: "700px",
        width: "100vw",
        backgroundColor: "#fff",
    }


    return(


        <div style={style}>
            <HeroHome />
            <SkillsHome />
        </div>
    )
}