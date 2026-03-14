import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['app/graphql/queries/**/*.ts'],
  generates: {
    'app/graphql/generated/globalTypes.ts': {
      plugins: ['typescript'],
    },
    'app/graphql/queries/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '../generated/globalTypes.ts',
        extension: '.ts',
        folder: '../generated',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
  ignoreNoDocuments: true,
  pluckConfig: {
    modules: [{ name: '@apollo/client', identifier: 'gql' }],
  },
}

export default config
