import React from 'react';
import store from '@src/redux';
import { fireEvent, render } from '@testing-library/react-native';
import { FavoritesScreen } from './Favorites.screen';
import { Providers } from '@src/__mocks__/providers';
import { addCharacter, addEpisode } from '@src/redux/store/favorites';
import { MOCK_CHARACTER } from '@src/__mocks__/api/character';
import { MOCK_EPISODE } from '@src/__mocks__/api/episode';
import { mockedNavigate } from 'setup.jest';
import { act } from 'react-test-renderer';

describe('Screen: FavoritesScreen', () => {
  it('should render screen with empty favorites', async () => {
    const { getByText, toJSON } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    expect(getByText('Adicione seus personages favoritos')).toBeVisible();
    expect(getByText('Adicione seus episódios favoritos')).toBeVisible();

    expect(toJSON()).toMatchSnapshot();
  });

  it('should navigate to characters screen', async () => {
    const { getByText } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    fireEvent.press(getByText('Adicione seus personages favoritos'));
    expect(mockedNavigate).toHaveBeenCalledWith('BottomTabNavigator', { screen: 'Characters' });
  });

  it('should navigate to episodes screen', async () => {
    const { getByText } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    fireEvent.press(getByText('Adicione seus episódios favoritos'));
    expect(mockedNavigate).toHaveBeenCalledWith('BottomTabNavigator', { screen: 'Episodes' });
  });

  it('should render screen with favorite characters', async () => {
    store.dispatch(addCharacter(MOCK_CHARACTER));
    const { getByTestId, toJSON } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    expect(getByTestId('character-1')).toBeVisible();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render screen with favorite episode', async () => {
    store.dispatch(addEpisode(MOCK_EPISODE));
    const { getByTestId, toJSON } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    expect(getByTestId('episode-1')).toBeVisible();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should navigate to character details screen', async () => {
    const { getByTestId } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    fireEvent.press(getByTestId('character-1'));
    expect(mockedNavigate).toHaveBeenCalledWith('CharacterNavigator', {
      screen: 'Details',
      params: MOCK_CHARACTER,
    });
  });

  it('should can remove episode from favorites', async () => {
    const { getByTestId, getByText } = render(
      <Providers>
        <FavoritesScreen />
      </Providers>,
    );

    expect(getByTestId('episode-1')).toBeVisible();
    fireEvent.press(getByTestId('episode-1-favorite-icon-button'));

    await act(async () => {
      expect(getByText('Adicione seus episódios favoritos')).toBeVisible();
    });
  });
});
