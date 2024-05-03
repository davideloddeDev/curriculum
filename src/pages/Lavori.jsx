import "./Lavori/lavori.css";
import Button from "react-bootstrap/Button";

export function Lavori() {
  return (
    <div>
      <div className="mainLavori">
        <div className="heroLavori">
          <img src="public/heroStudy.jpeg" alt="Lavori" />
        </div>
        <h1>I Miei Lavori</h1>
        <div className="dataLavori">
          <div className="dataLavoriSx">
            <img src="public/hekolo.png" alt="Davide Lodde" />
          </div>
          <div className="dataLavoriDx">
            <h2>Hekolo</h2>

            <p>
              A Partire da Dicembre 2020 mi sono occupato dello sviluppo di un
              App denominata “Hekolo” che usava servizi come geolocalizzazione,
              notifiche push, gestione multipiattaforma, accesso riservato ecc.
            </p>
            <Button href="/contatti" variant="primary">
              Contattami
            </Button>
          </div>
        </div>
        <div className="dataLavori">
          <div className="dataLavoriSx">
            <h2>Stai Con Me</h2>

            <p>
              A Partire da Ottobre 2020 mi sono occupato dello sviluppo di un
              App denominata “Stai con me” che usava servizi come
              geolocalizzazione e altri servizi per dare assistenza ad anziani e
              disabili
            </p>
            <Button href="/contatti" variant="primary">
              Contattami
            </Button>
          </div>
          <div className="dataLavoriDx">
            <img src="public/staiConMe.jpeg" alt="Davide Lodde" />
          </div>
        </div>
        <div className="dataLavori">
          <div className="dataLavoriSx">
            <img src="public/webDesign.jpeg" alt="Davide Lodde" />
          </div>
          <div className="dataLavoriDx">
            <h2>Corso Web Design</h2>

            <p>
              A Partire dal 2019 ho insegnato l’arte dello sviluppo web, se
              ricercate il mio nome e cognome su una ricerca Google e poi andate
              sul collegamento a “Prontopro” troverete alcune recensioni a tal
              proposito
            </p>
            <Button href="/contatti" variant="primary">
              Contattami
            </Button>
          </div>
        </div>
        <div className="dataLavori">
          <div className="dataLavoriSx">
            <h2>Orabbit Multimedia</h2>

            <p>
              A partire da metà Settembre 2019 ho lavorato presso Orabbit
              Multimedia. Mi occupavo di realizzare per conto dei clienti
              dell’azienda, siti web Statici (Usando HTML, CSS, JS e PHP),Siti
              web Dinamici (prevalentemente con Wordpress) e E-commerce (anche
              in questo caso soprattutto con Wordpress e sporadicamente con
              Prestashop)
            </p>
            <Button href="/contatti" variant="primary">
              Contattami
            </Button>
          </div>
          <div className="dataLavoriDx">
            <img src="public/Orabbit.jpeg" alt="Davide Lodde" />
          </div>
        </div>
      </div>
    </div>
  );
}
