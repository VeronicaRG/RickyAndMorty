import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './navigators/BottomTab';
import { RouteParams } from './routes.types';

const mainNavigatorScreenOptions = { headerShown: false };

const { Navigator, Screen, Group } = createNativeStackNavigator<RouteParams>();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={mainNavigatorScreenOptions}
        initialRouteName={'BottomTabNavigator'}>
        <Group>
          <Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
