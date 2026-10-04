import type { SidekickPropetries } from '@/sidekick/models.ts'
import type { LanguageModelInstance } from '@/ai/models.ts'
import { getLanguageModel } from '@/ai/service.ts'
import { generateText } from 'ai'

export class Sidekick {
    name: string
    propetries: SidekickPropetries
    languageModel: LanguageModelInstance | undefined

    messages = []

    constructor(name: string, propetries: SidekickPropetries) {
        this.name = name
        this.propetries = propetries

        this.initalize()
    }

    async initalize() {
        const { provider, model, credential } = this.propetries.languageModel

        this.languageModel = await getLanguageModel(provider, model, credential)
    }

    private async triggerResponse() {
        if (!this.languageModel) {
            throw new Error('language model not set')
        }

        const response = await generateText({
            model: this.languageModel,
            messages: this.messages,
        })

        console.log(response)
    }

    async sendMessage() {
        this.messages.push({ role: 'user', message: 'Heewuuu, how are you doooin? owo' })
        await this.triggerResponse()
    }
}
