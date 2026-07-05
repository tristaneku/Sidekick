import { db } from '@/storage/db.ts';
import { z } from 'zod';

class KV<TSchema extends z.ZodObject> {
  constructor(readonly path: string, readonly schema: TSchema) {
    db.exec(`
      CREATE TABLE IF NOT EXISTS kv (
        path TEXT NOT NULL,
        key TEXT NOT NULL,
        value TEXT NOT NULL,
        PRIMARY KEY (path, key)
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
      'INSERT INTO kv (path, key, value) VALUES (?, ?, ?) ON CONFLICT(path, key) DO UPDATE SET value = excluded.value',
      this.path,
      key,
      JSON.stringify(parsed),
    );
  }

  get<K extends keyof z.infer<TSchema>>(key: K): z.infer<TSchema>[K] | undefined {
    const row = db.prepare('SELECT value FROM kv WHERE path = ? AND key = ?').get(this.path, key) as
      | { value: string }
      | undefined;

    if (!row) return undefined;

    const fieldSchema = this.getFieldSchema(key);

    return fieldSchema.parse(JSON.parse(row.value));
  }

  has<K extends keyof z.infer<TSchema>>(key: K) {
    const row = db.prepare('SELECT 1 FROM kv WHERE path = ? AND key = ? LIMIT 1').get(this.path, key);

    return !!row;
  }

  delete<K extends keyof z.infer<TSchema>>(key: K) {
    db.exec('DELETE FROM kv WHERE path = ? AND key = ?', this.path, key);
  }

  clear() {
    db.exec('DELETE FROM kv WHERE path = ?', this.path);
  }
}

export { KV };
