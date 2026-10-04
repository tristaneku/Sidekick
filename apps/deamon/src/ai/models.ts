export const availableProviders = {
    'vercel_ai_gateway': 'Vercel AI Gateway',
    'anthropic': 'Anthropic',
    'openai': 'OpenAI',
    'spacexai': 'SpaceXAI',
}

export type AvailableProviders = keyof typeof availableProviders
