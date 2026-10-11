import { credentials } from '@/db/schema.ts'
import { db } from '@/db/service.ts'
import { eq } from 'drizzle-orm/sql/expressions'
import { type Credential, CredentialSchema } from '@/credentials/schema.ts'

export async function saveCredential<T extends Credential['type']>(name: string, type: T, value: CredentialMap[T]): Promise<void> {
    await db.insert(credentials).values({ name, type, value })
}

export async function getCredential<T extends Credential['type']>(
    type: T,
    name: string,
): Promise<Extract<Credential, { type: T }> | undefined> {
    const [row] = await db.select().from(credentials).where(eq(credentials.name, name))
    if (!row) return undefined

    const parsed = CredentialSchema.parse(row.value)
    if (parsed.type !== type) return undefined

    return parsed as Extract<Credential, { type: T }>
}

export async function getCredentials(): Promise<Credential[]> {
    const rows = await db.select().from(credentials)

    return rows.map((row) => CredentialSchema.parse(row.value))
}

export async function deleteCredential(name: string): Promise<void> {
    await db.delete(credentials).where(eq(credentials.name, name))
}
