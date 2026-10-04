import { defineConfig } from 'drizzle-kit'

const file = Deno.env.get('DB_FILE_NAME')

if (!file) {
    console.error('DB_FILE_NAME is not specified')
    Deno.exit(1)
}

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: file,
    },
})
