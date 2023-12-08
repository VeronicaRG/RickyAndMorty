import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RickAndMorty from './assets/svgs/home-icon.svg';

import * as S from './App.styles';
import { ThemeProvider } from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <S.Container>
          <S.StatusBar />
          <S.Title>Rick And Morty</S.Title>
          <RickAndMorty color="white" width={50} height={50} />
        </S.Container>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
