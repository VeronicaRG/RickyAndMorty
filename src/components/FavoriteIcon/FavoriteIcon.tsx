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
  testID = '',
}) => {
  return (
    <TouchableOpacity onPress={handlePressFavorite} testID={`${testID}favorite-icon-button`}>
      {isFavorite ? (
        <Icon
          testID={`${testID}favorite-icon-colorful`}
          width={widthIcon}
          height={heightIcon}
          name="fav-colorful"
        />
      ) : (
        <Icon
          color={iconColor}
          width={widthIcon}
          height={heightIcon}
          testID={`${testID}favorite-icon-monochrome`}
          name="fav-monochrome"
        />
      )}
    </TouchableOpacity>
  );
};
