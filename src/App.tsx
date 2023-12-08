import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import * as S from './App.styles';
import {ThemeProvider} from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <S.Container>
          <S.StatusBar />
          <S.Title>Ola Mundo</S.Title>
        </S.Container>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
