import './css/udemy.css'

export function Udemy() {
    return(
        <div className={"udemyContainer"}>
            <div className={"udemyImage"}>
                <img src="/udemy.jpeg" alt="develhope"/>
            </div>
            <div className={"udemyText"}>
                <h2>Udemy - Marzo / Settembre 2020</h2>
                <p>Da Marzo a Settembre 2020 Ho acquistato una serie di corsi su Udemy che mi ha permesso di poter essere indipendente nella progettazione e nello sviluppo di App Android e IOS. Tra le varie tematiche si parlava di XML, Java, Kotlin, SwiftUI, gestione delle icone, grafica vettoriale e molto altro. Tramite questi corsi ho ottenuto i certificati come App Developer, e questo mi ha permesso nel corso del tempo di realizzare alcuni progetti interessanti, come menzionato nella pagina dei miei Lavori. Comunque se vuoi saperne di più non esitare a contattarmi</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}