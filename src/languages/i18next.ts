import 'intl-pluralrules';
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { INITIAL_LANGUAGE } from '@src/constants';
import { ptBR as PT_BR_DATE, enUS as EN_US_DATE } from 'date-fns/locale';

import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

export const RESOURCES = {
  [INITIAL_LANGUAGE]: ptBR,
  ['en-US']: enUS,
} as const;

export const DATE_LOCALES = {
  [INITIAL_LANGUAGE]: PT_BR_DATE,
  ['en-US']: EN_US_DATE,
};

i18n.use(initReactI18next).init({
  fallbackLng: [INITIAL_LANGUAGE],
  ns: Object.keys(RESOURCES[INITIAL_LANGUAGE]) as Array<keyof typeof ptBR>,
  fallbackNS: Object.keys(ptBR) as Array<keyof typeof ptBR>,
  lng: INITIAL_LANGUAGE,
  debug: false,
  resources: RESOURCES,
});

export { i18n };
export default i18n;
