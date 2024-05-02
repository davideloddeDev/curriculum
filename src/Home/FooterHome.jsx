import { AFooter } from "./AFooter";

export function FooterHome() {
  const footerStyle = {
    height: "200px",
    width: "100vw",
    backgroundColor: "#212529",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const sxFooterStyle = {
    height: "20vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const dxFooterStyle = {
    height: "20vh",
    width: "100vw",
    backgroundColor: "#00ff00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const addressStyle = {
    textAlign: "left"
  };

  return (
    <div style={footerStyle}>
      <div style={sxFooterStyle}>
        <AFooter href="/contatti" testo="Contatti" />
        <AFooter href="/miei-lavori" testo="I Miei Lavori" />
        <AFooter href="/miei-corsi" testo="I Miei Corsi" />
        <AFooter href="/dati-anagrafici" testo="Dati Anagrafici" />
        <AFooter href="/miei-studi" testo="I Miei Studi" />
      </div>
      <div style={dxFooterStyle}>
        <address style={addressStyle}>
          <strong>Davide Lodde</strong><br />
          Via Farfa 16<br />
          09134 Cagliari, Italy<br />
          <abbr title="Phone">Tel:</abbr> <a href="tel:+393890459408" style={{ color: "#000", marginLeft: "5px" }}> (+39) 389 - 045 - 9408</a>
        </address>
        <address>
          <strong>Mail:</strong>
          <a
            href="mailto:dalo.apps@gmail.com"
            style={{ color: "#000", marginLeft: "5px" }}
          >
            dalo.apps@gmail.com
          </a>
        </address>
      </div>
    </div>
  );
}
