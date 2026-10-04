
export interface CredentialMap {
  telegram: {
    bot_token: string
  }
}

export type CredentialType = keyof CredentialMap
