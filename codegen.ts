require('dotenv').config();
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_ADDRESS,
  documents: ['src/**/*.graphql.ts'],
  hooks: { afterOneFileWrite: ['prettier --write', 'eslint --fix'] },
  generates: {
    'src/types/graphql/': {
      preset: 'client',
      plugins: [],
      presetConfig: { gqlTagName: 'gql' },
    },
  },
};

export default config;
