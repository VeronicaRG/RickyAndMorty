import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './navigators/BottomTab';
import { RouteParams } from './routes.types';
import { CharacterNavigator } from './navigators/Characters';
import { Platform } from 'react-native';

export const defaultScreenOptions = { headerShown: false };

const { Navigator, Screen, Group } = createNativeStackNavigator<RouteParams>();

export const Routes: React.FC = () => {
  const presentation = Platform.select({
    ios: 'modal' as const,
    default: 'containedTransparentModal' as const,
  });

  return (
    <NavigationContainer>
      <Navigator screenOptions={defaultScreenOptions} initialRouteName={'BottomTabNavigator'}>
        <Group>
          <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Group>
        <Group screenOptions={{ presentation }}>
          <Screen name="CharacterNavigator" component={CharacterNavigator} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
