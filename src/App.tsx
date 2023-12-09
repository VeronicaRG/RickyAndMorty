import React from 'react';
import '@src/languages';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@src/theme';
import { Routes } from '@src/routes';

import * as S from './App.styles';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './services/api';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <S.StatusBar />
      <ThemeProvider>
        <ApolloProvider client={apolloClient}>
          <Routes />
        </ApolloProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
