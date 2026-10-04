import type { AvailableProviders } from '@/ai/models.ts'
import { createGateway } from 'ai'
import { createAnthropic } from 'npm:@ai-sdk/anthropic@4.0.71'
import { createOpenAI } from 'npm:@ai-sdk/openai@4.0.83'
import { createXai } from 'npm:@ai-sdk/xai@5.0.14'

export function getProvider(provider: AvailableProviders, apiKey: string) {
    switch (provider) {
        case 'vercel_ai_gateway':
            return createGateway({ apiKey })
        case 'anthropic':
            return createAnthropic({ apiKey })
        case 'openai':
            return createOpenAI({ apiKey })
        case 'spacexai':
            return createXai({ apiKey })
    }
}
