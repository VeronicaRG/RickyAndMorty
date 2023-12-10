import { Character } from '@core-types/graphql';
import { TouchableOpacityProps } from 'react-native';

export type CharacterCardProps = { character: Partial<Character> } & TouchableOpacityProps;
