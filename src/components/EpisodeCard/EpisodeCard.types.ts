import { Character, Episode, Maybe } from '@core-types/graphql';
import { TouchableOpacityProps } from 'react-native';

export type EpisodeCardProps = {
  episode: Partial<Omit<Episode, 'characters'>> & {
    image?: string;
    characters?: Partial<Maybe<Character>>[];
  };
} & TouchableOpacityProps;
