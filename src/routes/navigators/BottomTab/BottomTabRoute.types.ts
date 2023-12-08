import { TextStyle, ViewStyle } from 'react-native';

export type TabBarIconProps = { color: string; focused: boolean };

export type BottomTabParams = {
  Characters: undefined;
  Episodes: undefined;
};

export type TabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
  activeBackgroundColor: string;
  tabStyle: ViewStyle;
  labelStyle: TextStyle;
};
