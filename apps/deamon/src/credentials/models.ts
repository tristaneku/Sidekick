import type { CredentialMap } from '@/credentials/schema.ts'

export type CredentialType = keyof CredentialMap
export type CredentialValue = CredentialMap[keyof CredentialMap]

export type Credential = {
    [K in CredentialType]: {
        name: string
        type: K
        value: CredentialMap[K]
    }
}[CredentialType]
