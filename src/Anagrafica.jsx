import './Anagrafica/css/anagrafica.css'

export function Anagrafica() {
    return(
        <div className="anagrafica">
            <section className="anagraficaHero">
                <img src="heroAnagrafici.jpeg"
                     alt="hero"/>
            </section>
            <section className="anagraficaDescription">
                <div className="containerSx">
                    <img src="DavideLodde.png"
                         alt="Davide Lodde"/>
                </div>
                <div className="containerDx">
                    <h2>Mi Presento</h2>
                    <p>
                        Mi chiamo Davide Lodde, sono nato a Cagliari il 08/10/1993,<br/>
                        ho 30 anni e sono uno svilluppatore software appassionato di tecnologia.<br/><br/>

                        Sono di nazionalità italiana e vivo a Giugliano in Campania, in provincia di Napoli.
                    </p>
                </div>
            </section>
        </div>
    )
}