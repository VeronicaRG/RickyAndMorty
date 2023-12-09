import React from 'react';
import '@src/languages';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@src/theme';
import { Routes } from '@src/routes';

import * as S from './App.styles';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <S.StatusBar />
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
