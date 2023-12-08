import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabParams } from './navigators/BottomTab/BottomTabRoute.types';

export type RouteParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParams>;
};
