import React from 'react';
import { render } from '@testing-library/react-native';
import { Icon, svgs } from './Icon';

describe('Component: Icon', () => {
  it('should render component', () => {
    const { toJSON } = render(
      <>
        {Object.keys(svgs).map(iconName => (
          <Icon key={iconName} name={iconName as keyof typeof svgs} />
        ))}
      </>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
