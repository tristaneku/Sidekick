import { drizzle } from 'drizzle-orm/libsql';

const file = Deno.env.get("DB_FILE_NAME")

if (!file) {
  console.error("DB_FILE_NAME is not specified");
  Deno.exit(1)
}

export const db = drizzle(file)
