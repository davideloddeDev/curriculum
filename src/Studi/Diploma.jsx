import './css/diploma.css'

export function Diploma() {
    return(
        <div className={"diplomaContainer"}>
            <div className={"diplomaImage"}>
                <img src="/diploma.jpeg" alt="develhope"/>
            </div>
            <div className={"diplomaText"}>
                <h2>Diploma - Settembre 2007 / Luglio 2012</h2>
                <p>Nel Luglio 2012 Mi sono diplomato al I.P. S. I. A. A. Meucci a Cagliari, ho studiato in maniera approfondita l’uso del PLC, e questo mi ha dato modo di capire quanto fosse fondamentale per me il lavoro della programmazione, inoltre ho imparato le basi del lavoro da elettricista.</p>
                <p>Il voto finale con cui mi sono diplomato è stato di 80/100</p>
                <p>Se vuoi saperne di più circa la mia carriera scolastica e circa i corsi che hanno completato il mio percorso di studi non esitare a contattarmi</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}