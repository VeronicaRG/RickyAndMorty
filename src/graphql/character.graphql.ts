import { gql } from '@core-types/graphql';

export const GET_CHARACTERS = gql(`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        species
        gender
        status
      }
      info {
        next
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
