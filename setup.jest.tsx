import React from 'react';
import '@testing-library/jest-native/extend-expect';

require('@shopify/flash-list/jestSetup');

jest.mock('moti/skeleton', () => ({
  Skeleton: ({ children }: { children: React.JSX.Element }) => <>{children}</>,
}));

afterEach(() => {
  jest.useRealTimers();
});

export const mockedNavigate = jest.fn();
export const mockedRoute = jest.fn();
export const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
    }),
    useRoute: mockedRoute,
  };
});

jest.mock('redux-persist', () => {
  const actualNav = jest.requireActual('redux-persist');
  return {
    ...actualNav,
    persistStore: (store: any) => store,
  };
});
