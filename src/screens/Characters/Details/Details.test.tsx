import '@testing-library/jest-native/extend-expect';

import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { CharacterDetailsScreen } from './Details.screen';
import { Providers } from '@src/__mocks__/providers';
import { MockedProvider } from '@apollo/client/testing';
import { MOCK_CHARACTER, MOCK_CHARACTER_DETAILS } from '@src/__mocks__/api/character';
import { GET_CHARACTER_DETAILS } from '@src/graphql/character.graphql';
import { mockedGoBack, mockedRoute } from 'setup.jest';

const mocks = [
  {
    delay: 15,
    request: { query: GET_CHARACTER_DETAILS, variables: { characterId: '1' } },
    result: MOCK_CHARACTER_DETAILS,
  },
];

describe('Screen: CharacterDetailsScreen', () => {
  it('should render screen with loading state', async () => {
    mockedRoute.mockImplementation(() => ({ params: MOCK_CHARACTER }));

    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharacterDetailsScreen />
        </MockedProvider>
      </Providers>,
    );

    expect(screen.findByTestId('chapter-0-property-skeleton-left')).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render screen after all loads', async () => {
    mockedRoute.mockImplementation(() => ({ params: MOCK_CHARACTER }));

    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharacterDetailsScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('chapter-0-property-label')).toBeTruthy();
      expect(await screen.findByTestId('chapter-0-property-value')).toBeTruthy();
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  it('should be available to add character to favorites', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharacterDetailsScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('character-1-favorite-icon-button'));

    await act(async () => {
      expect(screen.getByTestId('character-1-favorite-icon-colorful')).toBeTruthy();
    });
  });

  it('should be available to remove character to favorites', async () => {
    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharacterDetailsScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('character-1-favorite-icon-button'));

    await act(async () => {
      expect(screen.getByTestId('character-1-favorite-icon-monochrome')).toBeTruthy();
    });
  });

  it('should can goBack', async () => {
    mockedGoBack.mockImplementation(() => ({ goBack: mockedGoBack }));

    render(
      <Providers>
        <MockedProvider mocks={mocks} addTypename={true}>
          <CharacterDetailsScreen />
        </MockedProvider>
      </Providers>,
    );

    await act(async () => {
      expect(await screen.findByTestId('character-1')).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId('character-1-goBack'));
    await act(async () => {
      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
