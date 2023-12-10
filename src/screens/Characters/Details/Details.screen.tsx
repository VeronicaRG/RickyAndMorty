import React from 'react';

import { useCharacterDetailsScreen } from './Details.logic';
import * as S from './Details.styles';

export const CharacterDetailsScreen: React.FC = () => {
  const {} = useCharacterDetailsScreen();

  return <S.Container />;
};
