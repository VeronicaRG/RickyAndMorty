import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as S from './App.styles';
import { ThemeProvider } from './theme';
import { Routes } from './routes';

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
