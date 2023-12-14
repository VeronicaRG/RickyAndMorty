import React from 'react';
import { render } from '@testing-library/react-native';
import { EpisodeCard } from './EpisodeCard';
import { MOCK_EPISODE } from '@src/__mocks__/api/episode';

describe('Component: EpisodeCard', () => {
  it('should render component', () => {
    const { toJSON } = render(
      <EpisodeCard episode={MOCK_EPISODE} handlePressFavorite={() => {}} isFavorite />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
