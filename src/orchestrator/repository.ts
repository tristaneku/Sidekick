import { db } from '@/storage/db.ts';

db.exec(`
    CREATE TABLE IF NOT EXISTS sidekicks (
        name TEXT PRIMARY KEY,

    )
`);
