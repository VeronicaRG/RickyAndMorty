import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabParams } from './navigators/BottomTab/BottomTabRoute.types';
import { CharactersNavigatorParams } from './navigators/Characters';

export type RouteParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParams>;
  CharacterNavigator: NavigatorScreenParams<CharactersNavigatorParams>;
};
