import React from 'react';

if (__DEV__) require('@src/tools/reactotron');
import '@src/languages';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@src/theme';
import { Routes } from '@src/routes';

import * as S from './App.styles';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './services/api';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persist } from './redux';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <S.StatusBar />
      <ThemeProvider>
        <ApolloProvider client={apolloClient}>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persist}>
              <Routes />
            </PersistGate>
          </ReduxProvider>
        </ApolloProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
