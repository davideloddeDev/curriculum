import { Form } from "../form/Form";
import "./Contatti/contatti.css";

export function Contatti() {
    return(
        <div className="mainContatti">
            <div className="heroContatti">
            <img src="public/heroAnagrafici.jpeg" alt="anagrafici" />
            </div>
            <div className="dataContatti">
                <Form />
            </div>
        </div>
    )
}