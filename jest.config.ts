import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  coverageDirectory: '.tmp/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.tsx', '!<rootDir>/src/**/index.tsx'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.spec.tsx', '**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  moduleNameMapper: {
    '[#]/(.*)': '<rootDir>/src/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.js',
  },
};

export default config;
