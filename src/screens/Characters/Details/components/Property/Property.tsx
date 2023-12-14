import React from 'react';

import * as S from './Property.styles';
import { PropertyProps } from './Property.types';
import { Skeleton } from 'moti/skeleton';
import { View } from 'react-native';

export const Property: React.FC<PropertyProps> = ({ label, value, testID }) => {
  return (
    <S.RowWrapper flexible>
      <S.PropertyWrapper>
        {label ? (
          <S.Property testID={`${testID}-label`}>{label}</S.Property>
        ) : (
          <View testID={`${testID}-skeleton-left`}>
            <Skeleton width="100%" height="100%" radius={6} colors={['#654c2d', '#926f44']} />
          </View>
        )}
      </S.PropertyWrapper>
      <S.PropertyDescriptionWrapper>
        {value ? (
          <S.PropertyDescription numberOfLines={1} testID={`${testID}-value`}>
            {value}
          </S.PropertyDescription>
        ) : (
          <View testID={`${testID}-skeleton-right`}>
            <Skeleton width="100%" height="100%" radius={6} colors={['#654c2d', '#926f44']} />
          </View>
        )}
      </S.PropertyDescriptionWrapper>
    </S.RowWrapper>
  );
};
