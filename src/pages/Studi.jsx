import "./Studi/studi.css";
export function Studi() {
    return(
        <div className="mainStudi">
            <div className="heroStudi">
            <img src="public/heroStudy.jpeg" alt="studi" />
            </div>
            <div className="dataStudi">
                <div className="dataStudiSx">
                <img src="public/myStudy.jpeg" alt="Davide Lodde" />
                </div>
                <div className="dataStudiDx">
                    <h2>I Miei Studi</h2>
                    <p>
                        Descrizione
                    </p>
                </div>
            </div>
        </div>
    )
}