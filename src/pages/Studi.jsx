import "./Studi/studi.css";
import Button from 'react-bootstrap/Button';

export function Studi() {
  return (
    <div className="mainStudi">
      <div className="heroStudi">
        <img src="public/heroStudy.jpeg" alt="studi" />
      </div>
      <h1>I Miei Studi</h1>
      <div className="dataStudi">
        <div className="dataStudiSx">
          <img src="public/myStudy.jpeg" alt="Davide Lodde" />
        </div>
        <div className="dataStudiDx">
          <h2>Develhope - Ottobre 2023 / Maggio 2024</h2>

          <p>
            <ul>
              <li>Utilizzo dei linguaggi HTML5, CSS3</li>
              <li>Utilizzo del sistema di versioning GIT</li>
              <li>Utilizzo del linguaggio di programmazione JavaScript </li>
              <li>Creazione di app frontend usando framework React</li>
              <li>Creazione delle app backend usando framework Node.js</li>
              <li>Conoscenza di dependency management con npm</li>
              <li>
                Conoscenza dei principi di architettura delle applicazioni
                frontend e backend Accenni e conoscenza della CI (Continuous
                Integration)
              </li>
              <li>Accenni e conoscenza del testing</li>
              <li>Organizzazione di lavoro in metodologia Agile</li>
            </ul>
            Grazie a Develhope ho potuto anche seguire una serie di conferenze
            che mi hanno aiutato a sviluppare qualità utili alla collaborazione
            con colleghi e altri.
            <br />
            <br />
            Ad ogni fine modulo era previsto un checkpoint che mi ha aiutato a
            mettere sul tavolo le nozioni apprese.
          </p>
          <Button href="/contatti" variant="primary">Contattami</Button>
        </div>
      </div>
      <div className="dataStudi">
        <div className="dataStudiSx">
          <h2>Corso IT - Aprile / Giugno 2022</h2>

          <p>
            Grazie al fatto che ho vinto una borsa di studio promossa da
            Google.org e Fondazione Italiana Accenture ed erogata da Academy
            Rapido ho potuto frequentare da Aprile a Giugno 2022 un corso di
            circa 500 ore su tre mesi per diventare esperto di Supporto Tecnico
            e Sicurezza. Per partecipare al percorso, a numero chiuso, ho dovuto
            superare un test di ingresso consistente tra le altre cose in un
            quiz di logica ed una videocall. Durante il corso ho conseguito il
            Certificato del corso “Google IT Support Professional Certificate”
            su Coursera.
            <br />
            <br />
            Oltre alla parte teorica, durante il percorso ho realizzato diversi
            progetti pratici, con il supporto di un Advisor Tecnico esperto
            messo a disposizione da Academy Rapido.
            <br />
            <br />
            Il percorso ha previsto il rispetto di scadenze settimanali con
            ritmi serrati e l'utilizzo quotidiano dei principali tool di
            produttività aziendale: Slack, Google Calendar, Google drive, Zoom.
            <br />
            <br />
            Se vuoi conoscermi in maniera più approfondita e vedere più da
            vicino come questo corso mi ha cambiato non esitare a contattarmi.
          </p>
          <Button href="/contatti" variant="primary">Contattami</Button>
        </div>
        <div className="dataStudiDx">
          <img src="public/corsoIt.jpeg" alt="Davide Lodde" />
        </div>
      </div>
      <div className="dataStudi">
        <div className="dataStudiSx">
          <img src="public/udemy.jpeg" alt="Davide Lodde" />
        </div>
        <div className="dataStudiDx">
          <h2>Udemy - Marzo / Settembre 2020</h2>

          <p>
            Da Marzo a Settembre 2020 Ho acquistato una serie di corsi su Udemy
            che mi ha permesso di poter essere indipendente nella progettazione
            e nello sviluppo di App Android e IOS. Tra le varie tematiche si
            parlava di XML, Java, Kotlin, SwiftUI, gestione delle icone, grafica
            vettoriale e molto altro. Tramite questi corsi ho ottenuto i
            certificati come App Developer, e questo mi ha permesso nel corso
            del tempo di realizzare alcuni progetti interessanti, come
            menzionato nella pagina dei miei Lavori. Comunque se vuoi saperne di
            più non esitare a contattarmi
          </p>
          <Button href="/contatti" variant="primary">Contattami</Button>
        </div>
      </div>
      <div className="dataStudi">
        <div className="dataStudiSx">
          <h2>Diploma - Settembre 2007 / Luglio 2012</h2>

          <p>
            Nel Luglio 2012 Mi sono diplomato al I.P. S. I. A. A. Meucci a
            Cagliari, ho studiato in maniera approfondita l’uso del PLC, e
            questo mi ha dato modo di capire quanto fosse fondamentale per me il
            lavoro della programmazione, inoltre ho imparato le basi del lavoro
            da elettricista.
            <br />
            <br />
            Il voto finale con cui mi sono diplomato è stato di 80/100
            <br />
            <br />
            Se vuoi saperne di più circa la mia carriera scolastica e circa i
            corsi che hanno completato il mio percorso di studi non esitare a
            contattarmi
          </p>
          <Button href="/contatti" variant="primary">Contattami</Button>
        </div>
        <div className="dataStudiDx">
          <img src="public/diploma.jpeg" alt="Davide Lodde" />
        </div>
      </div>
    </div>
  );
}
