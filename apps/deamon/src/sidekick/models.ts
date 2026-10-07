import type { AvailableProviders } from '@/ai/models.ts'

export interface SidekickPropetries {
    windowContext: number | undefined
    maxSteps: number | undefined
    maxSubAgents: number | undefined

    llmProvider: AvailableProviders
    llmModel: string
    llmCredential: string
}
