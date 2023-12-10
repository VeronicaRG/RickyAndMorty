require('dotenv').config();
const fs = require('fs');
const path = require('path');

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_ADDRESS,
  documents: ['src/**/*.graphql.ts'],
  hooks: {
    afterOneFileWrite: ['prettier --write', 'eslint --fix'],
    afterAllFileWrite: () => {
      const graphqlIndexPath = path.join(__dirname, 'src/types/graphql/index.ts');
      fs.appendFileSync(graphqlIndexPath, "export * from './graphql';\n");
    },
  },
  generates: {
    'src/types/graphql/': {
      preset: 'client',
      plugins: [],
      presetConfig: { gqlTagName: 'gql' },
    },
  },
};

export default config;
