import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const credentials = sqliteTable('credentials', {
    name: text().primaryKey(),
    type: text().notNull(),
    value: text({ mode: 'json' }).notNull(),
})

export const utilities = sqliteTable('utilities', {
    name: text().primaryKey(),
    config: text({ mode: 'json' }),
})

export const channels = sqliteTable('channels', {
    name: text().primaryKey(),
    config: text({ mode: 'json' }),
})

export const sidekicks = sqliteTable('sidekicks', {
    name: text().primaryKey(),
})
