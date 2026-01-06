import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем файлы перевода (создадим их на следующем шаге)
import translationPL from './locales/pl.json';
import translationEN from './locales/en.json';
import translationDE from './locales/de.json';

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
  de: { translation: translationDE }
};

i18n
  .use(LanguageDetector) // Автоматически определяет язык браузера
  .use(initReactI18next) // Передает i18n в react-i18next
  .init({
    resources,
    fallbackLng: 'pl', // Язык по умолчанию
    interpolation: {
      escapeValue: false // React и так защищает от XSS
    }
  });

export default i18n;