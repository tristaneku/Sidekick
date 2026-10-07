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
    const result = await getCredential('llm_service', credential)

    if (!result) {
        throw new Error("Credential couldn't fetched")
    }

    return getProvider(provider, result.api_key)(model)
}
