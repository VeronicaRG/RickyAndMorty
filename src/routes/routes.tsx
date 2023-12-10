import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './navigators/BottomTab';
import { RouteParams } from './routes.types';
import { CharacterNavigator } from './navigators/Characters';

export const defaultScreenOptions = { headerShown: false };

const { Navigator, Screen, Group } = createNativeStackNavigator<RouteParams>();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={defaultScreenOptions} initialRouteName={'BottomTabNavigator'}>
        <Group>
          <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Group>
        <Group screenOptions={{ presentation: 'modal' }}>
          <Screen name="CharacterNavigator" component={CharacterNavigator} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
