import './css/develhope.css'

export function Develhope() {
    return(
        <div className={"develhopeContainer"}>
            <div className={"develhopeImage"}>
                <img src="/myStudy.jpeg" alt="develhope"/>
            </div>
            <div className={"develhopeText"}>
                <h2>Develhope - Ottobre 2023 / Maggio 2024</h2>
                <ul>
                    <li>Utilizzo dei linguaggi HTML5, CSS3</li>
                    <li>Utilizzo del sistema di versioning GIT</li>
                    <li>Utilizzo del linguaggio di programmazione JavaScript</li>
                    <li>Creazione di app frontend usando framework React</li>
                    <li>Creazione delle app backend usando framework Node.js</li>
                    <li>Conoscenza di dependency management con npm</li>
                    <li>Conoscenza dei principi di architettura delle applicazioni frontend e backend Accenni e conoscenza della CI (Continuous Integration)</li>
                    <li>Accenni e conoscenza del testing</li>
                    <li>Organizzazione di lavoro in metodologia Agile</li>
                </ul>

                <p>Grazie a Develhope ho potuto anche seguire una serie di conferenze che mi hanno aiutato a sviluppare qualità utili alla collaborazione con colleghi e altri.</p>
                <p>Ad ogni fine modulo era previsto un checkpoint che mi ha aiutato a mettere sul tavolo le nozioni apprese.</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}