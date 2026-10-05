export interface CredentialMap {
    telegram: {
        bot_token: string
    }

    grok: {
        api_token: string
    }

    vercelAiGateway: {
        api_key: string
    }
}

export type CredentialType = keyof CredentialMap

export type Credential = {
    [K in CredentialType]: {
        name: string
        type: K
        value: CredentialMap[K]
    }
}[CredentialType]
