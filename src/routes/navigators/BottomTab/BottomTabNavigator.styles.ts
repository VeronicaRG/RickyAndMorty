import { IAppearanceOptions, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar';

import { TabBarOptions } from './BottomTabNavigator.types';

export const appearance: Partial<IAppearanceOptions> = {
  whenActiveShow: TabElementDisplayOptions.BOTH,
  whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
  activeTabBackgrounds: '#64757D',
  tabBarBackground: '#91A3AD',
  floating: true,
};

export const tabBarOptions = {
  activeTintColor: '#FFFFFF',
  inactiveTintColor: '#989898',

  tabStyle: {
    borderColor: '#000',
    borderWidth: 2,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
} as TabBarOptions;
