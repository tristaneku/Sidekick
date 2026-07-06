import { db } from '@/storage/db.ts';
import { z } from 'zod';

class KV<TSchema extends z.ZodObject> {
  constructor(readonly table: string, readonly schema: TSchema) {
    db.exec(`
      CREATE TABLE IF NOT EXISTS ${table} (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);
  }

  private getFieldSchema<K extends keyof z.infer<TSchema>>(key: K) {
    return this.schema.shape[key as string];
  }

  save<K extends keyof z.infer<TSchema>>(key: K, value: z.infer<TSchema>[K]) {
    const fieldSchema = this.getFieldSchema(key);
    const parsed = fieldSchema.parse(value);

    db.exec(
      `INSERT INTO ${this.table} (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
      key,
      JSON.stringify(parsed),
    );
  }

  get<K extends keyof z.infer<TSchema>>(key: K): z.infer<TSchema>[K] | undefined {
    const row = db.prepare(`SELECT value FROM ${this.table} WHERE key = ?`).get(key) as
      | { value: string }
      | undefined;

    if (!row) return undefined;

    const fieldSchema = this.getFieldSchema(key);

    return fieldSchema.parse(JSON.parse(row.value));
  }

  has<K extends keyof z.infer<TSchema>>(key: K) {
    const row = db.prepare(`SELECT 1 FROM ${this.table} WHERE key = ? LIMIT 1`).get(key);

    return !!row;
  }

  delete<K extends keyof z.infer<TSchema>>(key: K) {
    db.exec(`DELETE FROM ${this.table} WHERE key = ?`, key);
  }

  clear() {
    db.exec(`DELETE FROM ${this.table}`);
  }
}

export { KV };
