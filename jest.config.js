module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect', '<rootDir>/setup.jest.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg': '<rootDir>/src/__mocks__/react-native-svg-mock.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/types/graphql',
    '<rootDir>/src/redux/persist',
    'node_modules',
  ],
};
