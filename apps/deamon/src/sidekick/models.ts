import type { AvailableModels, AvailableProviders } from '@/ai/models.ts'

export interface SidekickPropetries {
    languageModel: {
        provider: AvailableProviders
        model: AvailableModels
    }
}
