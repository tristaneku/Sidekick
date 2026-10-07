import { Sidekick } from '@/sidekick/sidekick.ts'

const uken = new Sidekick('Uken', {
    windowContext: 5,
    maxSteps: 5,
    maxSubAgents: 5,

    llmCredential: 'test',
    llmProvider: 'vercel_ai_gateway',
    llmModel: 'inclusionai/ling-3.1-flash',
})
