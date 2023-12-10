import { gql } from '@core-types/graphql';

export const GET_CHARACTERS = gql(`
query GetCharacters($filter: FilterCharacter) {
  characters(filter: $filter) {
    results {
      id
      name
      image
    }
  }
}
`);
