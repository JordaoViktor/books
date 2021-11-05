module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
};
