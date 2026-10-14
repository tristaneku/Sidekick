import type { AvailableProviders } from '@/ai/models.ts'
import type { Sidekick } from '@/sidekick/sidekick.ts'

export interface SidekickPropetries {
    windowContext: number | undefined
    maxSteps: number | undefined
    maxSubAgents: number | undefined

    llmProvider: AvailableProviders
    llmModel: string
    llmCredential: string
}

export type MessageSidekick = Sidekick['sendMessage']
