import * as z from 'zod'

export const CredentialSchema = z.union([
    z.object({
        name: z.string(),
        type: z.literal('telegram'),
        value: z.object({
            bot_token: z.string(),
        }),
    }),

    z.object({
        name: z.string(),
        type: z.literal('llm_service'),
        value: z.object({
            api_key: z.string(),
        }),
    }),
])

export type Credential = z.infer<typeof CredentialSchema>
