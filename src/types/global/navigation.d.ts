import { RouteParams } from '../../routes/routes.types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteParams {}
  }
}
