import React from 'react';
import { FavoriteIcon } from '@components/FavoriteIcon';
import { render, fireEvent } from '@testing-library/react-native';

describe('Component: FavoriteIcon', () => {
  it('should render and match snapshot with favorite true', () => {
    const { toJSON } = render(<FavoriteIcon isFavorite handlePressFavorite={() => {}} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot with favorite false', () => {
    const { toJSON } = render(<FavoriteIcon isFavorite={false} handlePressFavorite={() => {}} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the correct icon with colorful ID', () => {
    const { getByTestId } = render(<FavoriteIcon isFavorite handlePressFavorite={() => {}} />);

    expect(getByTestId('favorite-icon-colorful')).toBeTruthy();
  });

  it('should render the correct icon with monochrome ID', () => {
    const mockedFunction = jest.fn();
    const { getByTestId } = render(
      <FavoriteIcon isFavorite={false} handlePressFavorite={mockedFunction} />,
    );

    expect(getByTestId('favorite-icon-monochrome')).toBeTruthy();
  });

  it('should be render ...', () => {
    const mockedFunction = jest.fn();
    const { getByTestId } = render(
      <FavoriteIcon isFavorite handlePressFavorite={mockedFunction} />,
    );

    const isFavorite = getByTestId('favorite-icon-button');
    fireEvent.press(isFavorite);
    expect(mockedFunction).toHaveBeenCalled();
  });
});
