import './css/it.css'

export function IT() {
    return(
        <div className={"itContainer"}>
            <div className={"itImage"}>
                <img src="/corsoIt.jpeg" alt="develhope"/>
            </div>
            <div className={"itText"}>
                <h2>Corso IT - Aprile / Giugno 2022</h2>

                <p>Grazie al fatto che ho vinto una borsa di studio promossa da Google.org e Fondazione Italiana Accenture ed erogata da Academy Rapido ho potuto frequentare da Aprile a Giugno 2022 un corso di circa 500 ore su tre mesi per diventare esperto di Supporto Tecnico e Sicurezza. Per partecipare al percorso, a numero chiuso, ho dovuto superare un test di ingresso consistente tra le altre cose in un quiz di logica ed una videocall. Durante il corso ho conseguito il Certificato del corso “Google IT Support Professional Certificate” su Coursera.</p>
                <p>Oltre alla parte teorica, durante il percorso ho realizzato diversi progetti pratici, con il supporto di un Advisor Tecnico esperto messo a disposizione da Academy Rapido.</p>
                <p>Il percorso ha previsto il rispetto di scadenze settimanali con ritmi serrati e l'utilizzo quotidiano dei principali tool di produttività aziendale: Slack, Google Calendar, Google drive, Zoom.</p>
                <p>Se vuoi conoscermi in maniera più approfondita e vedere più da vicino come questo corso mi ha cambiato non esitare a contattarmi.</p>

                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}