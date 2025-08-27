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
