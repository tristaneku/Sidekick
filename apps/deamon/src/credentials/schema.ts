import * as z from 'zod'

export const CredentialMapSchema = z.object({
    telegram: z.object({
        bot_token: z.string(),
    }),

    llm_service: z.object({
        api_key: z.string(),
    }),
})

export type CredentialMap = z.infer<typeof CredentialMapSchema>
