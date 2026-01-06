import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./KontaktPage.scss";

// Переменные для Telegram (убедись, что они есть в твоем .env)
const _CHAT_ID = process.env.REACT_APP_TG_CHAT_ID;
const _TG_TOKEN_BOT = process.env.REACT_APP_TG_TOKEN;
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
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

const KontaktPage = () => {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const getCountryCode = (lang) => {
        switch (lang) {
            case 'pl': return 'pl';
            case 'de': return 'de';
            case 'en': return 'gb';
            default: return 'pl';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dateTime = new Date().toLocaleString('pl-PL', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        const msg = `
<b>📥 NOWE ZAPYTANIE: JPJ-Project</b>
─────────────────────
<b>👤 Klient:</b> ${name}
<b>🏢 Firma:</b> ${company || '—'}
<b>📧 E-mail:</b> <code>${email}</code>
<b>📱 Telefon:</b> <code>+${phone}</code>
─────────────────────
<b>📝 Wiadomość:</b>
<i>${message}</i>
─────────────────────
<b>📅 Data:</b> ${dateTime}
        `;

        try {
            await sendData(msg);
            setStatus('success');
            setName(''); setCompany(''); setEmail(''); setPhone(''); setMessage('');
        } catch (error) {
            setStatus('error');
        }
        setTimeout(() => setStatus(null), 6000);
    };

    return (
        <main className="kontakt-page-premium">
            {status && (
                <div className={`notification-toast ${status}`}>
                    <div className="toast-inner">
                        <div className="toast-icon">{status === 'success' ? '✓' : '!'}</div>
                        <div className="toast-content">
                            <h5>{status === 'success' ? t('contact.success.title') : t('contact.errors.send_error')}</h5>
                            <p>{status === 'success' ? t('contact.success.message') : t('contact.errors.send_error')}</p>
                        </div>
                    </div>
                </div>
            )}

            <section className="kontakt-hero">
                <div className="container">
                    <span className="subtitle">{t('header.contact')}</span>
                    <h1>{t('contact.title')}</h1>
                    <div className="accent-bar"></div>
                </div>
            </section>

            <section className="kontakt-main-grid">
                <div className="container">
                    <div className="main-wrapper">
                        
                        {/* ЛЕВАЯ ЧАСТЬ: ИНДУСТРИАЛЬНЫЙ БЛОК */}
                        <aside className="kontakt-sidebar">
                            <div className="sidebar-content">
                                <div className="sidebar-header">
                                    <h3>{t('footer.company_title')}</h3>
                                    <div className="small-bar"></div>
                                </div>
                                <div className="contact-blocks">
                                    <div className="block">
                                        <label>{t('footer.office_title')}</label>
                                        <p>{t('footer.address_office')}</p>
                                        <p>{t('footer.city_office')}</p>
                                    </div>
                                    <div className="block">
                                        <label>{t('contact.labels.phone')}</label>
                                        <a href="tel:+48791121323" className="big-link">+48 791 121 323</a>
                                        <p className="sub">{t('contact.days')}: 08:00 - 16:00</p>
                                    </div>
                                    <div className="block">
                                        <label>{t('contact.labels.email')}</label>
                                        <a href="mailto:biuro@jpj.pl" className="big-link">biuro@jpj.pl</a>
                                    </div>
                                </div>
                                <div className="sidebar-footer">
                                    <p>NIP: 9591280386</p>
                                    <p>REGON: 260144574</p>
                                </div>
                            </div>
                        </aside>

                        {/* ПРАВАЯ ЧАСТЬ: ПРОФЕССИОНАЛЬНАЯ ФОРМА */}
                        <div className="form-container">
                            <form className="industrial-form" onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="name">{t('contact.labels.name')}</label>
                                        <input 
                                            type="text" id="name" required 
                                            value={name} onChange={(e) => setName(e.target.value)}
                                            placeholder={t('contact.placeholders.name')} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">{t('contact.labels.company')}</label>
                                        <input 
                                            type="text" id="company" 
                                            value={company} onChange={(e) => setCompany(e.target.value)}
                                            placeholder={t('contact.placeholders.company')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">{t('contact.labels.email')}</label>
                                        <input 
                                            type="email" id="email" required 
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                            placeholder={t('contact.placeholders.email')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>{t('contact.labels.phone')}</label>
                                        <PhoneInput
                                            country={getCountryCode(i18n.language)}
                                            value={phone}
                                            onChange={phone => setPhone(phone)}
                                            containerClass="phone-container-pro"
                                            inputClass="phone-input-pro"
                                            buttonClass="phone-flag-pro"
                                            placeholder={t('contact.placeholders.phone')}
                                        />
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="message">{t('contact.labels.message')}</label>
                                    <textarea 
                                        id="message" required rows="8"
                                        value={message} onChange={(e) => setMessage(e.target.value)}
                                        placeholder={t('contact.placeholders.message')}
                                    ></textarea>
                                </div>

                                <button type="submit" className="pro-submit">
                                    <span>{t('contact.button')}</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default KontaktPage;