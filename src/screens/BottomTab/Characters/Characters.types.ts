import { ArrayElement } from '@core-types/global/utils';
import { GetCharactersQuery } from '@core-types/graphql';

export type CharacterItem = NonNullable<
  ArrayElement<NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>>
>;
