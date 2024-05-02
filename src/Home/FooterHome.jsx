import { AFooter } from "./AFooter";
import "./css/footer.css";

export function FooterHome() {
  return (
    <div className="mainFooter">
      <div className="footerSx">
        <AFooter href="/contatti" testo="Contatti" />
        <AFooter href="/miei-lavori" testo="I Miei Lavori" />
        <AFooter href="/miei-corsi" testo="I Miei Corsi" />
        <AFooter href="/dati-anagrafici" testo="Dati Anagrafici" />
        <AFooter href="/miei-studi" testo="I Miei Studi" />
      </div>
      <div className="footerDx">
        <p>
          <strong>Davide Lodde</strong><br />
          <a href="">Via Farfa 16<br />
          09134 Cagliari, Italy<br /></a>
        </p>
        <p>
          Tel: <a href="tel:+393890459408">+39 389 - 045 - 9408</a>
        </p>
        <p>
          Mail: <a href="mailto:dalo.apps@gmail.com">dalo.apps@gmail.com</a>
        </p>
        
          
      </div>
    </div>
  );
}
