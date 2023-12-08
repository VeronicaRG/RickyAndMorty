import React from 'react';
import * as S from './Episodes.styles';
import { useEpisodesScreen } from './Episodes.logic';

export const EpisodesScreen: React.FC = () => {
  const {} = useEpisodesScreen();

  return <S.Container />;
};
