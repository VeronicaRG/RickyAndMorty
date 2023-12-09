import * as React from 'react';

import { createNavigationContainerRef } from '@react-navigation/native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Icon } from '@components/Icon';
import { CharactersScreen } from '@screens/BottomTab/Characters';
import { EpisodesScreen } from '@screens/BottomTab/Episodes';
import { appearance, tabBarOptions } from './BottomTabRoute.styles';
import { BottomTabParams, TabBarIconProps } from './BottomTabRoute.types';
import { useTranslation } from 'react-i18next';

const { Navigator, Screen } = AnimatedTabBarNavigator<BottomTabParams>();

export const navigationRef = createNavigationContainerRef();

const CharactersIcon: React.FC<TabBarIconProps> = ({ focused, color }) => (
  <Icon name={focused ? 'rick-colorful' : 'rick-monochrome'} color={color} />
);

const EpisodesIcon: React.FC<TabBarIconProps> = ({ focused, color }) => (
  <Icon name={focused ? 'morty-colorful' : 'morty-monochrome'} color={color} />
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
    </Navigator>
  );
};
