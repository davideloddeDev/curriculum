import {HeroHome} from "./Home/hero.jsx";
import {SkillsHome} from "./Home/Skills.jsx";

export function Home() {

    const style = {
        height: "1200px",
        width: "100vw",
        backgroundColor: "#fff",
        marginTop: "90px",
    }


    return(


        <div style={style}>
            <HeroHome />
            <SkillsHome />
        </div>
    )
}