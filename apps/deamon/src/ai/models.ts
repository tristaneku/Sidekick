import type { getLanguageModel } from '@/ai/service.ts'

export const availableProviders = {
    'vercel_ai_gateway': 'Vercel AI Gateway',
    'spacexai': 'SpaceXAI',
}

export type AvailableProviders = keyof typeof availableProviders

export type LanguageModelInstance = Awaited<ReturnType<typeof getLanguageModel>>
