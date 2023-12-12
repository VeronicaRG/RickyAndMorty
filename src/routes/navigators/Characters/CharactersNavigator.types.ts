import { DeepPartial } from '@core-types/global/utils';
import { Character } from '@core-types/graphql';

export type CharactersNavigatorParams = {
  Details: DeepPartial<Character>;
};
