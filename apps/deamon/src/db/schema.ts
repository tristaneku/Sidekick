import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const credentials = sqliteTable("credentials", {
  name: text().primaryKey(),
  type: text().notNull(),
  value: text({mode: "json"}).notNull(),
});
