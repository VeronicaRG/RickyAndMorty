import React from 'react';

import * as S from './Header.styles';
import { HeaderProps } from './Header.types';
import { Icon } from '@components/Icon';
import { FavoriteIcon } from '@components/FavoriteIcon';

export const Header: React.FC<HeaderProps> = ({
  isFavorite,
  handlePressGoBack,
  handlePressFavorite,
}) => {
  return (
    <S.Header>
      <S.HeaderOption onPress={handlePressGoBack}>
        <Icon name="arrow-left" />
      </S.HeaderOption>
      <FavoriteIcon isFavorite={isFavorite} handlePressFavorite={handlePressFavorite} />
    </S.Header>
  );
};
