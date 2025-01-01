import './css/webdesign.css'

export function WebDesign() {
    return (
        <div className={"webdesignContainer"}>
            <div className={"webdesignImage"}>
                <img src="/webDesign.jpeg" alt="hekolo"/>
            </div>
            <div className={"webdesignText"}>
                <h2>Corso Web Design</h2>
                <p>A Partire dal 2019 ho insegnato l’arte dello sviluppo web, se ricercate il mio nome e cognome su una ricerca Google e poi andate sul collegamento a “Prontopro” troverete alcune recensioni a tal proposito</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}