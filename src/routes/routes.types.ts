import { NavigatorScreenParams } from '@react-navigation/native';
import { CharactersNavigatorParams } from './navigators/Characters';
import { BottomTabNavigatorParams } from './navigators/BottomTab';

export type RouteParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
  CharacterNavigator: NavigatorScreenParams<CharactersNavigatorParams>;
};
