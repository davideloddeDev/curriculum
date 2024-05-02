import { Card } from "./Card";

export function MainHome() {
  const mainStyle = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  const heroStyle = {
    height: "35vh",
    width: "100vw",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center"
  };

  const imageHero = {
    
    height: "35vh",
  };

  const cardStyle = {
    height: "35vh",
    width: "100vw",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center"
  };
  return (
    <div style={mainStyle}>
      <div style={heroStyle}>
        <img style={imageHero} src="public/heroHome.png" alt="hero" />
      </div>
      <div style={cardStyle}>
        <Card imageSrc="public/vite.svg" imageAlt="vite" title="Web" description1="In questa sezione potrai scoprire le mie competenze come" description2="Junior FullStack Web Developer" href="/vite" />
        <Card imageSrc="public/vite.svg" imageAlt="vite" title="Android" description1="In questa sezione potrai scoprire le mie competenze come" description2="Senior Android Developer"  href="/vite" />
        <Card imageSrc="public/vite.svg" imageAlt="vite" title="iOS" description1="In questa sezione potrai scoprire le mie competenze come" description2="Junior iOS Developer"  href="/vite" />
        
      </div>
    </div>
  );
}
