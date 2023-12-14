import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { CharactersScreen } from './Characters.screen';
import { Providers } from '@src/__mocks__/providers';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import {
  MOCK_GET_CHARACTERS_PAGE_1,
  MOCK_GET_CHARACTERS_PAGE_2,
} from '@src/__mocks__/api/character';
import { GET_CHARACTERS } from '@src/graphql/character.graphql';
import { mockedNavigate } from 'setup.jest';

const mocks: ReadonlyArray<MockedResponse> = [
  {
    delay: 15,
    request: { query: GET_CHARACTERS, variables: { page: 1 } },
    result: MOCK_GET_CHARACTERS_PAGE_1,
  },
  {
    delay: 15,
    request: { query: GET_CHARACTERS, variables: { page: 2 } },
    result: MOCK_GET_CHARACTERS_PAGE_2,
  },
];

describe('Screen: CharactersScreen', () => {
  it('should render screen with loading state', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharactersScreen />
        </MockedProvider>
      </Providers>,
    );

    expect(screen.findByTestId('character-list-skeleton')).toBeTruthy();
  });

  it('should render screen after all loads', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharactersScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });
  it('should be available navigate to CharacterDetailsScreen', async () => {
    mockedNavigate.mockImplementation(() => ({ navigate: mockedNavigate }));

    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharactersScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('character-1'));
    expect(mockedNavigate).toHaveBeenCalledWith('CharacterNavigator', {
      screen: 'Details',
      params: MOCK_GET_CHARACTERS_PAGE_1.data.characters.results[0],
    });
  });

  it('should render screen and load more info on scroll to bottom', async () => {
    const { getByTestId } = render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharactersScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
      expect(screen.toJSON()).toMatchSnapshot();
    });

    const eventData = {
      nativeEvent: {
        contentOffset: { y: 4000, x: 0 },
        contentSize: { height: 4000, width: 400 },
        layoutMeasurement: { height: 800, width: 400 },
      },
    };

    const flatList = getByTestId('character-list');
    await act(async () => {
      fireEvent.scroll(flatList, eventData);
      expect(await screen.findByTestId('character-21')).toBeTruthy();
    });
  });
});
