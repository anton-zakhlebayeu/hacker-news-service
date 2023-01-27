module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  testRegex: '(/__tests__/.*(test|spec))\\.tsx?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg|gif|ico)$': '<rootDir>/src/__tests__/__mocks__/fileMock.js',
  },

  transformIgnorePatterns: ['node_modules/(?!troublesome-dependency/.*)'],
}
