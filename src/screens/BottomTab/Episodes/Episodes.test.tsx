import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { EpisodesScreen } from './Episodes.screen';
import { Providers } from '@src/__mocks__/providers';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GET_EPISODES } from '@src/graphql/episode.graphql';
import { MOCK_GET_EPISODES_PAGE_1, MOCK_GET_EPISODES_PAGE_2 } from '@src/__mocks__/api/episode';
import {
  MOCKED_SEASON_1,
  MOCKED_SEASON_2,
  MOCKED_SEASON_3,
  MOCKED_SEASON_4,
} from '@src/__mocks__/api/season';

const mocks: ReadonlyArray<MockedResponse> = [
  {
    delay: 15,
    request: { query: GET_EPISODES, variables: { page: 1 } },
    result: MOCK_GET_EPISODES_PAGE_1,
  },
  {
    delay: 15,
    request: { query: GET_EPISODES, variables: { page: 2 } },
    result: MOCK_GET_EPISODES_PAGE_2,
  },
];

async function mockFetch(url: string) {
  switch (url) {
    case 'https://api.themoviedb.org/3/tv/60625/season/4?language=pt-BR': {
      return Promise.resolve({ json: () => Promise.resolve(MOCKED_SEASON_4) });
    }
    case 'https://api.themoviedb.org/3/tv/60625/season/3?language=pt-BR': {
      return Promise.resolve({ json: () => Promise.resolve(MOCKED_SEASON_3) });
    }
    case 'https://api.themoviedb.org/3/tv/60625/season/2?language=pt-BR': {
      return Promise.resolve({ json: () => Promise.resolve(MOCKED_SEASON_2) });
    }
    case 'https://api.themoviedb.org/3/tv/60625/season/1?language=pt-BR': {
      return Promise.resolve({ json: () => Promise.resolve(MOCKED_SEASON_1) });
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

describe('Screen: EpisodesScreen', () => {
  beforeAll(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch as typeof fetch));

  it('should render screen with loading state', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <EpisodesScreen />
        </MockedProvider>
      </Providers>,
    );

    expect(screen.findByTestId('episode-list-skeleton')).toBeTruthy();
  });

  it('should render screen after all loads', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <EpisodesScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('episode-1')).toBeTruthy();
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  it('should render screen and load more info on scroll to bottom', async () => {
    const { getByTestId } = render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <EpisodesScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('episode-1')).toBeTruthy();
      expect(screen.toJSON()).toMatchSnapshot();
    });

    const eventData = {
      nativeEvent: {
        contentOffset: { y: 4000, x: 0 },
        contentSize: { height: 4000, width: 400 },
        layoutMeasurement: { height: 800, width: 400 },
      },
    };

    const flatList = getByTestId('episode-list');
    await act(async () => {
      fireEvent.scroll(flatList, eventData);
      expect(await screen.findByTestId('episode-21')).toBeTruthy();
    });
  });

  it('should be available to add episode of favorites', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <EpisodesScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('episode-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('episode-1-favorite-icon-button'));

    await act(async () => {
      expect(screen.getByTestId('episode-1-favorite-icon-colorful')).toBeTruthy();
    });
  });

  it('should be available to remove episode of favorites', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <EpisodesScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('episode-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('episode-1-favorite-icon-button'));

    await act(async () => {
      expect(screen.getByTestId('episode-1-favorite-icon-monochrome')).toBeTruthy();
    });
  });
});
