import './css/staiconme.css'

export function StaiConMe() {
    return (
        <div className={"staiconmeContainer"}>
            <div className={"staiconmeImage"}>
                <img src="/staiConMe.jpeg" alt="hekolo"/>
            </div>
            <div className={"staiconmeText"}>
                <h2>Stai Con Me</h2>
                <p>A Partire da Ottobre 2020 mi sono occupato dello sviluppo di un App denominata “Stai con me” che usava servizi come geolocalizzazione e altri servizi per dare assistenza ad anziani e disabili</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}