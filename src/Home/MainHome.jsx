import { Cards } from "./Cards";
import './css/mainhome.css'

export function MainHome() {
  
  return (
    <div className="mainHome">
      <div className="hero">
        <img className="imageHero" src="public/heroHome.png" alt="hero" />
      </div>
      <div className="cards">
        
        <Cards classe="cardSx" imageSrc="public/vite.svg" imageAlt="vite" title="Web" description1="In questa sezione potrai scoprire le mie competenze come" description2="Junior FullStack Web Developer" href="#" />
        <Cards classe="cardCenter" imageSrc="public/vite.svg" imageAlt="vite" title="Android" description1="In questa sezione potrai scoprire le mie competenze come" description2="Senior Android Developer"  href="#" />
        <Cards classe="cardDx" imageSrc="public/vite.svg" imageAlt="vite" title="iOS" description1="In questa sezione potrai scoprire le mie competenze come" description2="Junior iOS Developer"  href="#" />
        
      </div>
    </div>
  );
}
