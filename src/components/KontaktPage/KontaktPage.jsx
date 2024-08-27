import React, { useState } from 'react';
import "./KontaktPage.scss";

const _CHAT_ID = "-4576936406";
const _TG_TOKEN_BOT = "7547107911:AAH6szYXUcprhMoyW_NCCwT_IiYI0e0Bz7c";
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`;

async function sendData(message) {
    try {
        const response = await fetch(_TG_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: _CHAT_ID,
                text: message,
                parse_mode: "HTML"
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
    }
}

const KontaktPage = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const msg = `Forma ze strony\n\nName: ${name}\nFirma: ${company}\nEmail: ${email}\nNumer: ${phone}\n\nWiadomość: ${message}`;
        
        try {
            await sendData(msg);
            alert("Thank you for sending the form");
        } catch (error) {
            alert("Failed to send the form. Please try again.");
        }

        // Сброс формы
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <main>
            <section id="contact">
                <h2>Skontaktuj się z nami</h2>
                <p>Chcesz dowiedzieć się więcej o naszej ofercie lub masz pytania? Jesteśmy tutaj, aby Ci pomóc! Wypełnij poniższy formularz, napisz do nas na adres e-mail lub zadzwoń. Czekamy na Twój kontakt!</p>
                <ul className="contact-info">
                    <li><strong>Adres e-mail:</strong> <a href="mailto:biuro@jpj.pl">biuro@jpj.pl</a></li>
                    <li><strong>Numer telefonu:</strong> <a href="tel:+48791121323">+48-791-121-323</a></li>
                </ul>
                <form onSubmit={handleSubmit} method="post" className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Imię i nazwisko:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Wprowadź swoje imię i nazwisko" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Nazwa firmy (opcjonalnie):</label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company" 
                            placeholder="Wprowadź nazwę firmy" 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Adres e-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Wprowadź swój adres e-mail" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Numer telefonu:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="Wprowadź numer telefonu" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Wiadomość:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            placeholder="Wprowadź swoją wiadomość" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </section>
        </main>
    );
}

export default KontaktPage;
