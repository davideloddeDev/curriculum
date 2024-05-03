
import { Cards } from './Home/Cards';
import './Home/css/mainhome.css'
export function Home() {

  return (
    <div  className="containerHome">
      <div className="mainHome">
        <div className="hero">
          <img className="imageHero" src="public/heroHome.png" alt="hero" />
        </div>
        <h2>Le Mie Skills</h2>
        <div className="cards">
          <Cards
            classe="cardSx"
            imageSrc="public/cardWeb.jpeg"
            imageAlt="vite"
            title="Web"
            description1="In questa sezione potrai scoprire le mie competenze come"
            description2="Junior FullStack Web Developer"
            href="#"
          />
          <Cards
            classe="cardCenter"
            imageSrc="public/cardAndroid.jpeg"
            imageAlt="vite"
            title="Android"
            description1="In questa sezione potrai scoprire le mie competenze come"
            description2="Senior Android Developer"
            href="#"
          />
          <Cards
            classe="cardDx"
            imageSrc="public/cardIOS.jpeg"
            imageAlt="vite"
            title="iOS"
            description1="In questa sezione potrai scoprire le mie competenze come"
            description2="Junior iOS Developer"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
