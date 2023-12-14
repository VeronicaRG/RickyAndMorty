import React from 'react';

import * as S from './EpisodesListSkeleton.styles';
import { Skeleton } from 'moti/skeleton';

export const EpisodesListSkeleton: React.FC = () => {
  return (
    <S.Container testID="episode-list-skeleton">
      <S.SkeletonContainer>
        <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
      </S.SkeletonContainer>
      <S.SkeletonContainer>
        <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
      </S.SkeletonContainer>
      <S.SkeletonContainer>
        <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
      </S.SkeletonContainer>
      <S.SkeletonContainer>
        <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
      </S.SkeletonContainer>
      <S.SkeletonContainer>
        <Skeleton width="100%" radius={6} height={140} colors={['#654c2d', '#926f44']} />
      </S.SkeletonContainer>
    </S.Container>
  );
};
