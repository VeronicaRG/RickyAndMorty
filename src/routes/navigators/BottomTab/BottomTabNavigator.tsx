import * as React from 'react';

import { createNavigationContainerRef } from '@react-navigation/native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Icon } from '@components/Icon';
import { CharactersScreen } from '@screens/BottomTab/Characters';
import { EpisodesScreen } from '@screens/BottomTab/Episodes';
import { FavoritesScreen } from '@screens/BottomTab/Favorites';
import { appearance, tabBarOptions } from './BottomTabNavigator.styles';
import { BottomTabNavigatorParams, TabBarIconProps } from './BottomTabNavigator.types';
import { useTranslation } from 'react-i18next';

const { Navigator, Screen } = AnimatedTabBarNavigator<BottomTabNavigatorParams>();

export const navigationRef = createNavigationContainerRef();

const CharactersIcon: React.FC<TabBarIconProps> = ({ focused }) => (
  <Icon name={focused ? 'rick-colorful' : 'rick-monochrome'} />
);

const EpisodesIcon: React.FC<TabBarIconProps> = ({ focused }) => (
  <Icon name={focused ? 'morty-colorful' : 'morty-monochrome'} />
);

const FavoritesIcon: React.FC<TabBarIconProps> = ({ focused }) => (
  <Icon name={focused ? 'fav-colorful' : 'fav-monochrome'} />
);

export const BottomTabNavigator: React.FC = () => {
  const { t } = useTranslation('routes');

  return (
    <Navigator appearance={appearance} tabBarOptions={tabBarOptions}>
      <Screen
        name="Characters"
        component={CharactersScreen}
        options={{
          tabBarLabel: t('bottomTab.character'),
          tabBarIcon: CharactersIcon,
        }}
      />
      <Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{
          tabBarLabel: t('bottomTab.episodes'),
          tabBarIcon: EpisodesIcon,
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: t('bottomTab.favorites'),
          tabBarIcon: FavoritesIcon,
        }}
      />
    </Navigator>
  );
};
