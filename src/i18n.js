// import i18n from "i18next";
// import { reactI18nextModule } from "react-i18next";

// import translationENG from '../public/locales/eng/translation.json';
// import translationCHI from '../public/locales/chi/translation.json';
// import translationVI from '../public/locales/vi/translation.json';

// // the translations
// const resources = {
//   eng: {
//     translation: translationENG
//   },
//   chi: {
//     translation: translationCHI
//   },
//   vi: {
//     translation: translationVI
//   }
// };

// i18n
//   .use(reactI18nextModule) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: "vi",

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'vi',
    lng:'vi',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;