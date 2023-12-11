import { TextStyle, ViewStyle } from 'react-native';

export type TabBarIconProps = { color: string; focused: boolean };

export type BottomTabNavigatorParams = {
  Episodes: undefined;
  Characters: undefined;
  Favorites: undefined;
};

export type TabBarOptions = {
  tabStyle: ViewStyle;
  labelStyle: TextStyle;
  activeTintColor: string;
  inactiveTintColor: string;
  activeBackgroundColor: string;
};
