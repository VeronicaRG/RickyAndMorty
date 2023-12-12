import React from 'react';

import * as S from './EmptyListButton.styles';
import { EmptyListButtonProps } from './EmptyListButton.types';

export const EmptyListButton: React.FC<EmptyListButtonProps> = ({
  label,
  handleEmptyListButton,
}) => {
  return (
    <S.EmptyContentContainer>
      <S.Button onPress={handleEmptyListButton}>
        <S.ButtonLabel>{label}</S.ButtonLabel>
      </S.Button>
    </S.EmptyContentContainer>
  );
};
