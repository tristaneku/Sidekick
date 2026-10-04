import { createGateway, gateway } from 'ai'
import { createXai } from 'npm:@ai-sdk/xai@5.0.14'
import type { AvailableProviders } from '@/ai/models.ts'
import { getCredential } from '@/credentials/service.ts'

export function getProvider(provider: AvailableProviders, apiKey: string) {
    switch (provider) {
        case 'vercel_ai_gateway':
            return createGateway({ apiKey })
        case 'spacexai':
            return createXai({ apiKey })
    }
}

export function getAvailableModels(provider: AvailableProviders) {
    switch (provider) {
        case 'vercel_ai_gateway':
            return gateway.getAvailableModels()
    }
}

export async function getLanguageModel(provider: AvailableProviders, model: string, credential: string) {
    const { api_key } = await getCredential(credential) as { api_key: string }

    if (typeof api_key !== 'string') {
        throw new Error('Could not fetch api key')
    }

    return getProvider(provider, api_key)(model)
}
