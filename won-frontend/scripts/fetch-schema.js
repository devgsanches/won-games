/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql')

const SCHEMA_URL = process.env.GRAPHQL_SCHEMA_URL || 'http://localhost:1337/graphql'
const OUTPUT_FILE = 'schema-temp.gql'

async function fetchSchema() {
  const response = await fetch(SCHEMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  })

  if (!response.ok) {
    throw new Error(`Falha ao buscar schema: ${response.status} ${response.statusText}`)
  }

  const { data, errors } = await response.json()
  if (errors) {
    throw new Error(`Erros na introspecção: ${JSON.stringify(errors)}`)
  }

  const schema = buildClientSchema(data)
  const sdl = printSchema(schema)
  fs.writeFileSync(OUTPUT_FILE, sdl, 'utf8')
  console.log(`Schema salvo em ${OUTPUT_FILE}`)
}

fetchSchema().catch((err) => {
  console.error(err)
  process.exit(1)
})
