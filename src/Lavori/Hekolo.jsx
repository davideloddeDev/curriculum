import './css/hekolo.css'

export function Hekolo() {
    return(
        <div className={"hekoloContainer"}>
            <div className={"hekoloImage"}>
                <img src="/hekolo.png" alt="hekolo"/>
            </div>
            <div className={"hekoloText"}>
                <h2>Hekolo</h2>
                <p>A Partire da Dicembre 2020 mi sono occupato dello sviluppo di un App denominata “Hekolo” che usava servizi come geolocalizzazione, notifiche push, gestione multipiattaforma, accesso riservato ecc.</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}