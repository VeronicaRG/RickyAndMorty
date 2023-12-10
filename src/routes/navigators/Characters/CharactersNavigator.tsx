import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersNavigatorParams } from '.';
import { CharacterDetailsScreen } from '@screens/Characters/Details';
import { defaultScreenOptions } from '@src/routes';

const { Navigator, Screen } = createNativeStackNavigator<CharactersNavigatorParams>();

export const CharacterNavigator: React.FC = () => {
  return (
    <Navigator screenOptions={defaultScreenOptions}>
      <Screen name="Details" component={CharacterDetailsScreen} />
    </Navigator>
  );
};
