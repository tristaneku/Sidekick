export const availableProviders = {
    'vercel_ai_gateway': 'Vercel AI Gateway',
    'anthropic': 'Anthropic',
    'openai': 'OpenAI',
    'spacexai': 'SpaceXAI',
}

export type AvailableProviders = keyof typeof availableProviders

export const availableModels: Record<AvailableProviders, string[]> = {
    'vercel_ai_gateway': ['openai/gpt-4o', 'openai/gpt-4.1'],
    'anthropic': ['anthropic/claude-opus-4'],
    'openai': [],
    'spacexai': [],
}
