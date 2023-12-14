import React from 'react';

import * as S from './CharactersListSkeleton.styles';
import { Skeleton } from 'moti/skeleton';
import { Row } from '@components/Row';

export const CharactersListSkeleton: React.FC = () => {
  return (
    <S.Container testID="character-list-skeleton">
      <Row>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
      </Row>
      <Row>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
      </Row>
      <Row>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
      </Row>
      <Row>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
      </Row>
      <Row>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
        <S.SkeletonContainer>
          <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
        </S.SkeletonContainer>
      </Row>
    </S.Container>
  );
};
