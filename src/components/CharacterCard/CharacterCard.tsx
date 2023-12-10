import React from 'react';

import * as S from './CharacterCard.styles';
import { CharacterCardProps } from './CharacterCard.types';

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, ...rest }) => {
  const { name, image: imageUrl } = character;

  return (
    <S.Card {...rest}>
      {!!imageUrl && <S.Image source={{ uri: imageUrl }} />}
      <S.InfoContainer>
        <S.Name>{name}</S.Name>
      </S.InfoContainer>
    </S.Card>
  );
};
