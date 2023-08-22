/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const path = require('path');
const glob = require('glob');
import type {Config} from 'jest';

const testFiles = glob.sync(path.join(__dirname, '**/*.test.js'));

const config: Config = {

  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: [...testFiles],
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["domain", "presentation/protocols", "signup-protocols.ts"]
};

export default config;
