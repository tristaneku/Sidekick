import type { AvailableProviders } from '@/ai/models.ts'
import { createGateway } from 'ai'
import { createAnthropic } from 'npm:@ai-sdk/anthropic@4.0.71'

export function getProvider(provider: AvailableProviders, apiKey: string) {
    switch (provider) {
        case 'vercel_ai_gateway':
            return createGateway({ apiKey })
        case 'anthropic':
            return createAnthropic({ apiKey })
    }
}
