import { credentials } from '@/db/schema.ts'
import { db } from '@/db/service.ts'
import { eq } from 'drizzle-orm/sql/expressions'
import type { Credential } from '@/credentials/schema.ts'

export async function saveCredential<T extends Credential['type']>(name: string, type: T, value: CredentialMap[T]): Promise<void> {
    await db.insert(credentials).values({ name, type, value })
}

export async function getCredential<T extends keyof CredentialMap>(type: T, name: string): Promise<CredentialMap[T] | undefined> {
    const [row] = await db.select().from(credentials).where(eq(credentials.name, name))

    if (!row) return undefined

    return CredentialMapSchema.shape[type].parse(row.value) as CredentialMap[T]
}

export async function getCredentials(): Promise<Credential[] | undefined> {
    const rows = await db.select().from(credentials)

    if (!rows) return undefined

    return CredentialMapSchema.parse(rows)
}

export async function deleteCredential(name: string): Promise<void> {
    await db.delete(credentials).where(eq(credentials.name, name))
}
