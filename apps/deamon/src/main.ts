import { saveCredential } from '@/credentials/service.ts'
import { Sidekick } from '@/sidekick/sidekick.ts'

await saveCredential('test', 'vercelAiGateway', {
    api_key: '0',
})

const uken = new Sidekick('Uken', {
    about: {
        description: '',
        personality: '',
    },

    execution: {
        windowContext: 5,
        maxSteps: 5,
        maxSubAgents: 5,
    },

    languageModel: {
        credential: 'test',
        provider: 'vercel_ai_gateway',
        model: '',
    },

    utilities: [],
})

await uken.sendMessage()
