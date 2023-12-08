import React from 'react';
import * as S from './Characters.styles';
import { useCharactersScreen } from './Characters.logic';

export const CharactersScreen: React.FC = () => {
  const {} = useCharactersScreen();

  return <S.Container />;
};
