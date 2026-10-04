import { db } from '@/db/service.ts'
import { credentials } from '@/db/schema.ts'
import type { Credential, CredentialMap, CredentialType } from '@/credentials/models.ts'
import { eq } from 'drizzle-orm/sql/expressions'

export async function saveCredential<T extends CredentialType>(name: string, type: T, value: CredentialMap[T]): Promise<void> {
    await db.insert(credentials).values({ name, type, value })
}

export async function getCredential(name: string): Promise<Credential | undefined> {
    const [row] = await db.select().from(credentials).where(eq(credentials.name, name))

    return row as Credential | undefined
}

export async function getCredentials(): Promise<Credential[]> {
    const rows = await db.select().from(credentials)

    return rows as Credential[]
}

export async function deleteCredential(name: string): Promise<void> {
    await db.delete(credentials).where(eq(credentials.name, name))
}
