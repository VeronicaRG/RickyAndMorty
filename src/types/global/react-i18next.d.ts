import 'react-i18next';
import { resources, defaultNS } from './index';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['pt-BR'];
  }
}
