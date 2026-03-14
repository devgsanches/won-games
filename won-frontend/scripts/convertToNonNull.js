/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra')
const graphql = require('graphql')

function convertListToNonNull(listType) {
  const itemType = listType.type
  // Só converte listas de tipos nomeados (ex: Developer, Category). Ignora [String], [ID], etc.
  if (itemType.kind !== 'NamedType') return null
  return {
    kind: 'NonNullType',
    type: {
      kind: 'ListType',
      type: {
        kind: 'NonNullType',
        type: itemType,
      },
    },
  }
}

function getListType(typeNode) {
  if (typeNode.kind === 'ListType') return typeNode
  if (typeNode.kind === 'NonNullType' && typeNode.type.kind === 'ListType') {
    return typeNode.type
  }
  return null
}

async function convert(inputFile, outputFile) {
  const schema = graphql.parse(await fs.readFile(inputFile, 'utf8'))
  const visitor = {
    FieldDefinition: (node) => {
      const listType = getListType(node.type)
      if (listType) {
        const newType = convertListToNonNull(listType)
        if (newType) {
          return { ...node, type: newType }
        }
      }
    },
  }
  const newSchema = graphql.visit(schema, visitor)
  await fs.outputFile(outputFile, graphql.print(newSchema), 'utf8')
  console.log(`Schema convertido (non-null) salvo em ${outputFile}`)
}

async function main() {
  await convert('schema-temp.gql', 'schema.gql')
  await fs.unlink('schema-temp.gql')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
