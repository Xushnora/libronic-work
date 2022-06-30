import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locale/en.json';
import uz from './locale/uz.json';
import ru from './locale/ru.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en,
    ru,
    uz,
  },
  
  fallbackLng: 'en',
});

export default i18n;