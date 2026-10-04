import type { SidekickPropetries } from '@/sidekick/models.ts'
import type { LanguageModelInstance } from '@/ai/models.ts'
import { getLanguageModel } from '@/ai/service.ts'

export class Sidekick {
    name: string
    propetries: SidekickPropetries
    languageModel: LanguageModelInstance | undefined

    messges = []

    constructor(name: string, propetries: SidekickPropetries) {
        this.name = name
        this.propetries = propetries

        this.initalize()
    }

    async initalize() {
        const { provider, model, credential } = this.propetries.languageModel

        this.languageModel = await getLanguageModel(provider, model, credential)
    }

    async
}
