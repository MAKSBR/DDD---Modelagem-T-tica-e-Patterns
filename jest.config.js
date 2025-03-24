/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  maxWorkers: '50%',
  bail: true,
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      isolatedModules: false,
      diagnostics: false
    }]
  }
};
