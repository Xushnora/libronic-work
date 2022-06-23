import {initReactI18next } from "react-i18next";
import i18n from "i18next";

import transUz from '../../assets/Language/uz.json'
import transEng from '../../assets/Language/eng.json'
import transRu from '../../assets/Language/ru.json'


const resources ={
    eng: {
        translation:transEng
    },
    ru: {
        translation:transRu
    },
    uz: {
        translation:transUz
    },
}


i18n
  .use(initReactI18next) 
  .init({
    resources: resources,
    lng: "eng", 
    fallbackLng: "eng",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;