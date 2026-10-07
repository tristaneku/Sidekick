import type { SidekickPropetries } from '@/sidekick/models.ts'
import type { LanguageModelInstance } from '@/ai/models.ts'
import type { ModelMessage } from 'ai'
import { getLanguageModel } from '@/ai/service.ts'
import { streamText } from 'ai'

export class Sidekick {
    name: string
    propetries: SidekickPropetries
    languageModel: LanguageModelInstance | undefined

    messages: ModelMessage[] = []

    constructor(name: string, propetries: SidekickPropetries) {
        this.name = name
        this.propetries = propetries

        this.initalize()
    }

    async initalize() {
        const { llmProvider, llmModel, llmCredential } = this.propetries

        this.languageModel = await getLanguageModel(llmProvider, llmModel, llmCredential)

        await this.sendMessage('Whats up?')
    }

    private pushMessage(message: ModelMessage) {
        this.messages.push(message)

        if (!this.propetries.windowContext) return

        if (this.messages.length > this.propetries.windowContext) {
            this.messages.shift()
        }
    }

    private async triggerResponse() {
        if (!this.languageModel) {
            throw new Error('language model not set')
        }

        const { textStream, finalStep } = streamText({
            model: this.languageModel,
            messages: this.messages,
        })

        for await (const part of textStream) {
            console.log(part)
        }

        const response = (await finalStep).response

        response.messages.forEach((message) => {
            this.messages.push(message)
        })

        console.log(this.messages)
    }

    async sendMessage(message: string) {
        this.pushMessage({ role: 'user', content: message })
        await this.triggerResponse()
    }
}
