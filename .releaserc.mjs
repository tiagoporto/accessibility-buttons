import { env } from 'node:process'

const config = {
  extends: 'semantic-release-monorepo',
  branches: [
    'main',
    {
      name: 'alpha',
      channel: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      channel: 'beta',
      prerelease: true,
    },
  ],
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@anolilab/semantic-release-pnpm',
  ],
}

// NOTE: add BRANCH env in the workflow
if (env.BRANCH === 'main') {
  config.plugins.push('@semantic-release/github')
}

export default config
