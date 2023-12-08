import React from 'react';
import {ThemeProvider as Provider} from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Theme, ThemeProviderProps} from './theme.types';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const safeArea = useSafeAreaInsets();
  const theme: Theme = {safeArea};

  return <Provider theme={theme}>{children}</Provider>;
};
