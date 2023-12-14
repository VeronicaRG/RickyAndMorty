import React from 'react';

import { ThemeProvider } from '@src/theme';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from '@src/redux';
import { NavigationContainer } from '@react-navigation/native';

export const Providers: React.FC<{ children: React.JSX.Element }> = ({ children }) => (
  <SafeAreaProvider
    initialMetrics={{
      insets: { bottom: 24, top: 10, right: 0, left: 0 },
      frame: { height: 800, width: 400, x: 0, y: 0 },
    }}>
    <ThemeProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);
