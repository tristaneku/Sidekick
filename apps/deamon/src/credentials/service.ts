import { db } from '@/db/service.ts';
import { credentials } from '@/db/schema.ts';
import type { CredentialType, CredentialMap } from '@/credentials/models.ts';

export async function saveCredential<T extends CredentialType>(name: string, type: T, value: CredentialMap[T]) {
  await db.insert(credentials).values({name, type, value})
}
