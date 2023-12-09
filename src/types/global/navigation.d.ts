import { RouteParams } from '@src/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteParams {}
  }
}
