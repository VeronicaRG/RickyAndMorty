import { EpisodeWithImage } from '@components/EpisodeCard';
import { DeepPartial } from '@core-types/global/utils';
import { Character } from '@core-types/graphql';

export type FavoritesStore = {
  characters: DeepPartial<Character>[];
  episodes: DeepPartial<EpisodeWithImage>[];
};
