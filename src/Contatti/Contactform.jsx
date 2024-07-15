import React, { useState } from 'react';
import './css/form.css'

export function Contactform() {

    const [nomeAzienda, setNomeAzienda] = useState('');
    const [indirizzoEmail, setIndirizzoEmail] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('nomeAzienda', nomeAzienda);
        formData.append('indirizzoEmail', indirizzoEmail);
        formData.append('numeroTelefono', numeroTelefono);

        try {
            const response = await fetch('script.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // Successo!
                console.log('Dati inviati correttamente!');
                // Puoi aggiungere qui la logica per gestire la risposta del server,
                // ad esempio mostrare un messaggio di successo all'utente.
            } else {
                // Errore durante l'invio dei dati
                console.error('Errore durante l invio dei dati.');
                // Puoi aggiungere qui la logica per gestire gli errori,
                // ad esempio mostrare un messaggio di errore all'utente.
            }
        } catch (error) {
            console.error('Errore durante l invio dei dati:', error);
        }
    };


    return(
        <div className={"formContainer"}>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="nomeAzienda">Nome Azienda:</label>
                    <input
                        type="text"
                        id="nomeAzienda"
                        value={nomeAzienda}
                        onChange={(e) => setNomeAzienda(e.target.value)}
                        required
                        className="contact-form-input"
                    />
                </div>
                <div>
                    <label htmlFor="indirizzoEmail">Indirizzo Email:</label>
                    <input
                        type="email"
                        id="indirizzoEmail"
                        value={indirizzoEmail}
                        onChange={(e) => setIndirizzoEmail(e.target.value)}
                        required
                        className="contact-form-input"
                    />
                </div>
                <div>
                    <label htmlFor="numeroTelefono">Numero di Telefono:</label>
                    <input
                        type="tel"
                        id="numeroTelefono"
                        value={numeroTelefono}
                        onChange={(e) => setNumeroTelefono(e.target.value)}
                        className="contact-form-input"
                    />
                </div>
                <button type="submit" className="contact-form-button">Invia</button>
            </form>
        </div>
    )
}