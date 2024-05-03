import { AFooter } from "./AFooter";
import "./footer.css";

export function Footer() {
  return (
    <div className="mainFooter">
      <div className="footerSx">
        <AFooter href="/contatti" testo="Contatti" />
        <AFooter href="/lavori" testo="I Miei Lavori" />
        <AFooter href="/studi" testo="I Miei Corsi" />
        <AFooter href="/anagrafici" testo="Dati Anagrafici" />
        <AFooter href="/studi" testo="I Miei Studi" />
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
