import React, { useCallback } from 'react';
import * as S from './Episodes.styles';
import { useEpisodesScreen } from './Episodes.logic';
import { ListRenderItem } from '@shopify/flash-list';
import { EpisodeCard } from '@components/EpisodeCard';
import { EpisodeItem } from './Episodes.types';
import { EpisodesListSkeleton } from './components/EpisodesListSkeleton';

export const EpisodesScreen: React.FC = () => {
  const { episodes, hasMoreToLoad, onEpisodesListEndReached } = useEpisodesScreen();

  const RenderCharacter: ListRenderItem<Partial<EpisodeItem>> = useCallback(
    ({ item }) => <EpisodeCard key={item?.id} episode={item} />,
    [],
  );

  return (
    <S.Container>
      <S.EpisodeList
        data={episodes}
        estimatedItemSize={200}
        renderItem={RenderCharacter}
        showsVerticalScrollIndicator={false}
        onEndReached={onEpisodesListEndReached}
        ListEmptyComponent={EpisodesListSkeleton}
        ListFooterComponent={hasMoreToLoad ? <S.Loading /> : undefined}
      />
    </S.Container>
  );
};
