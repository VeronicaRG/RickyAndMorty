import 'intl-pluralrules';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { INITIAL_LANGUAGE } from '@src/constants';

import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

export const resources = {
  [INITIAL_LANGUAGE]: ptBR,
  ['en-US']: enUS,
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: [INITIAL_LANGUAGE],
  ns: Object.keys(resources[INITIAL_LANGUAGE]) as Array<keyof typeof ptBR>,
  fallbackNS: Object.keys(ptBR) as Array<keyof typeof ptBR>,
  lng: INITIAL_LANGUAGE,
  debug: false,
  resources,
});

export { i18n };
export default i18n;
