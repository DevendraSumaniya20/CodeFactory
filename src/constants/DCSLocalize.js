import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './translations/en';
import fr from './translations/fr';
import ar from './translations/ar';

const LANGUAGES = {
  en,
  fr,
  ar,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      if (err || !language) {
        if (err) {
          console.log('Error fetching language from AsyncStorage', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);
        const fallbackLanguage = findBestAvailableLanguage
          ? findBestAvailableLanguage.languageTag
          : 'en';
        AsyncStorage.setItem('user-language', fallbackLanguage);
        callback(fallbackLanguage);
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    lng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });

if (typeof console !== 'undefined') {
  console.log('No language is set, choosing English as fallback');
}
