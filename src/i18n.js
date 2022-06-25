import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locale/en';
import uz from './locale/uz';
import ru from './locale/ru';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en,
    ru,
    uz,
  },
  fallbackLng: 'en',
});

export default i18n;