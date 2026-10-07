import { primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { integer } from 'drizzle-orm/sqlite-core/columns/integer'

export const credentials = sqliteTable('credentials', {
    name: text().primaryKey(),
    type: text().notNull(),
    value: text({ mode: 'json' }).notNull(),
})

export const sidekicks = sqliteTable('sidekicks', {
    name: text().primaryKey(),
})

export const utilities = sqliteTable('utilities', {
    type: text().notNull(),
    sidekickName: text().notNull().references(() => sidekicks.name, { onDelete: 'cascade' }),
    enabled: integer({ mode: 'boolean' }),
    config: text({ mode: 'json' }),
}, (t) => [
    primaryKey({ columns: [t.type, t.sidekickName] }),
])

export const mcpServers = sqliteTable('mcp_servers', {
    name: text().primaryKey(),
    credential: text().notNull().references(() => credentials.name, { onDelete: 'cascade' }),
    sidekickName: text().notNull().references(() => sidekicks.name, { onDelete: 'cascade' }),
    enabled: integer({ mode: 'boolean' }),
    config: text({ mode: 'json' }),
})

export const channels = sqliteTable('channels', {
    name: text().primaryKey(),
    type: text().notNull(),
    credential: text().notNull().references(() => credentials.name, { onDelete: 'cascade' }),
    sidekickName: text().notNull().references(() => sidekicks.name, { onDelete: 'cascade' }),
    enabled: integer({ mode: 'boolean' }),
    config: text({ mode: 'json' }),
})
