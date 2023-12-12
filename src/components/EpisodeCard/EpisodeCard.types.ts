import { FavoriteIconProps } from '@components/FavoriteIcon/FavoriteIcon.types';
import { DeepPartial } from '@core-types/global/utils';
import { Episode } from '@core-types/graphql';

export type EpisodeWithImage = DeepPartial<Episode> & { image?: string };

export interface EpisodeCardProps extends FavoriteIconProps {
  episode: EpisodeWithImage;
  horizontal?: boolean;
}
