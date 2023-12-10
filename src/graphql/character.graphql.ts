import { gql } from '@core-types/graphql';

export const GET_CHARACTERS = gql(`
  query GetCharacters($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        image
        species
        gender
        status
      }
    }
  }
`);

export const GET_CHARACTER_DETAILS = gql(`
  query GetCharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      name
      image
      gender
      status
      species
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        air_date
        episode
        created
      }
    }
  }
`);
