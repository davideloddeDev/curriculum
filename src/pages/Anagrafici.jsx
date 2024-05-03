import "./Anagrafici/anagrafici.css";

export function Anagrafici() {
    return(
        <div className="mainAnagrafici">
            <div className="heroAnagrafici">
            <img src="public/heroAnagrafici.jpeg" alt="anagrafici" />
            </div>
            <div className="dataAnagrafici">
                <div className="dataAnagraficiSx">
                <img src="public/DavideLodde.png" alt="Davide Lodde" />
                </div>
                <div className="dataAnagraficiDx">
                    <h2>Mi presento</h2>
                    <p>
                        Mi chiamo Davide Lodde, sono nato a Cagliari 
                        il 08/10/1993, <br/>ho 30 anni e sono uno sviluppatore
                        software appassionato di tecnologia. <br/><br/>
                        Sono di nazionalità italiana e vivo a Cagliari, 
                        in Sardegna. <br/><br/>Programmo per diverse piattaforme, 
                        inclusi il web (JavaScript, React, Node.js), 
                        Android (Java e Kotlin) e iOS (Swift e SwiftUI).<br/><br/>
                        Lavoro come freelance e collaboro con diverse 
                        aziende e startup sui loro progetti web e mobile.<br/><br/>
                        Il mio indirizzo email è dalo.apps@gmail.com,
                        potete contattarmi tramite email o attraverso il 
                        form presente nella pagina contatti del mio sito 
                        web. <br/>Sarò lieto di rispondere a qualsiasi domanda 
                        o richiesta di collaborazione, sia per progetti 
                        web che per applicazioni mobile, mettendo a 
                        disposizione le mie competenze trasversali nello 
                        sviluppo software per molteplici piattaforme.
                    </p>
                </div>
            </div>
        </div>
    )
}