import { DeepPartial } from '@core-types/global/utils';
import { Character } from '@core-types/graphql';
import { TouchableOpacityProps } from 'react-native';

export interface CharacterCardProps extends TouchableOpacityProps {
  horizontal?: boolean;
  character: DeepPartial<Character>;
}
