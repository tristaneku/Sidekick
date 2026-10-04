import { Sidekick } from '@/sidekick/sidekick.ts'

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
        model: 'inclusionai/ling-3.1-flash',
    },

    utilities: [],
})
