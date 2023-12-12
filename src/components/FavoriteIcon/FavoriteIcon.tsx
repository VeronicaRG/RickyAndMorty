import React from 'react';
import { FavoriteIconProps } from './FavoriteIcon.types';
import { Icon } from '@components/Icon';
import { TouchableOpacity } from 'react-native';

export const FavoriteIcon: React.FC<FavoriteIconProps> = ({
  isFavorite,
  widthIcon = 36,
  heightIcon = 36,
  handlePressFavorite,
  iconColor = '#ffff',
}) => {
  return (
    <TouchableOpacity onPress={handlePressFavorite}>
      {isFavorite ? (
        <Icon width={widthIcon} height={heightIcon} name="fav-colorful" />
      ) : (
        <Icon width={widthIcon} height={heightIcon} color={iconColor} name="fav-monochrome" />
      )}
    </TouchableOpacity>
  );
};
