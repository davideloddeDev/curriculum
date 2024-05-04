import React, { useState } from 'react';
import './form.css'

export function Form() {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Email inviata con successo');
            } else {
                console.error('Errore durante l\'invio dell\'email');
            }
        } catch (error) {
            console.error('Errore durante l\'invio dell\'email:', error);
        }
    };

    return (
        <>
            <h1>Contattami</h1>
            <form className='formContact' onSubmit={handleSubmit}>
                <div className='divCompany'>
                    <label htmlFor="companyName">Nome Azienda</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div className='divEmail'>
                    <label htmlFor="email">Indirizzo Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='divPhone'>
                    <label htmlFor="phoneNumber">Numero di Telefono</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Invia Richiesta</button>
            </form>
        </>
    );
}
