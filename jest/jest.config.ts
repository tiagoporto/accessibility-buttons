import type { Config } from 'jest'

const config: Config = {
  testMatch: [
    '**/__tests__/**/*.?([mc])[jt]s?(x)',
    '**/?(*.)+(test).?([mc])[jt]s?(x)',
  ],
  testEnvironment: 'jsdom',
  rootDir: '../',
  injectGlobals: false,
  // roots: ['<rootDir>/src'],
  collectCoverageFrom: ['packages/**/*.{ts,tsx,js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ['dist', 'tests'],
  coverageReporters: process.env.CI ? ['lcov'] : ['text', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    //   './CPF': '<rootDir>/dist/CPF.es',
    //   '@i18n/(.*)': '<rootDir>/src/site/locales/en/$1',
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!my-package)/'],
}

export default config
