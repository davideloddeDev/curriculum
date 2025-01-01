import './css/orabbit.css'

export function Orabbit() {
    return(
        <div className={"orabbitContainer"}>
            <div className={"orabbitImage"}>
                <img src="/Orabbit.jpeg" alt="hekolo"/>
            </div>
            <div className={"orabbitText"}>
                <h2>Orabbit Multimedia</h2>
                <p>A partire da metà Settembre 2019 ho lavorato presso Orabbit Multimedia. Mi occupavo di realizzare per conto dei clienti dell’azienda, siti web Statici (Usando HTML, CSS, JS e PHP),Siti web Dinamici (prevalentemente con Wordpress) e E-commerce (anche in questo caso soprattutto con Wordpress e sporadicamente con Prestashop)</p>
                <button><a href="/contatti">Contattami</a></button>
            </div>
        </div>
    )
}