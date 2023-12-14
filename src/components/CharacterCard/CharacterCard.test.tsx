import React from 'react';
import { render } from '@testing-library/react-native';
import { CharacterCard } from './CharacterCard';
import { MOCK_CHARACTER } from '@src/__mocks__/api/character';

describe('Component: CharacterCard', () => {
  it('should render component', () => {
    const { toJSON } = render(<CharacterCard character={MOCK_CHARACTER} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
