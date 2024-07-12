import './css/menu.css'

export function Menu() {
    return (
        <div className={"menu"}>
            <a href="/anagrafica">Dati Anagrafici</a>
            <a href="/studi">I Miei Studi</a>
            <a href="/lavori">I Miei Lavori</a>
            <a href="/contatti">Contatti</a>
        </div>
    )
}