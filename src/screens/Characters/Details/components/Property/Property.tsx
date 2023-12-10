import React from 'react';

import * as S from './Property.styles';
import { PropertyProps } from './Property.types';
import { Skeleton } from 'moti/skeleton';

export const Property: React.FC<PropertyProps> = ({ label, value }) => {
  return (
    <S.RowWrapper flexible>
      <S.PropertyWrapper>
        {label ? (
          <S.Property>{label}</S.Property>
        ) : (
          <Skeleton width="100%" height="100%" radius={6} colors={['#654c2d', '#926f44']} />
        )}
      </S.PropertyWrapper>
      <S.PropertyDescriptionWrapper>
        {value ? (
          <S.PropertyDescription numberOfLines={1}>{value}</S.PropertyDescription>
        ) : (
          <Skeleton width="100%" height="100%" radius={6} colors={['#654c2d', '#926f44']} />
        )}
      </S.PropertyDescriptionWrapper>
    </S.RowWrapper>
  );
};
