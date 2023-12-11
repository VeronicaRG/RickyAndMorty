import { gql } from '@core-types/graphql';

export const GET_EPISODES = gql(`
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
        characters {
          id
          image
        }
      }
      info {
        next
      }
    }
  }
`);
