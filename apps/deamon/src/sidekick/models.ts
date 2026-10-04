import type { AvailableProviders } from '@/ai/models.ts'
import type { AvailableUtilities } from '@/utilities/models.ts'

export interface SidekickPropetries {
    about: {
        description: string
        personality: string
    }

    utilities: AvailableUtilities[]

    execution: {
        windowContext: number | undefined
        maxSteps: number | undefined
        maxSubAgents: number | undefined
    }

    languageModel: {
        provider: AvailableProviders
        model: string
        credential: string
    }
}
