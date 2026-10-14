import type { MessageSidekick } from '@/sidekick/models.ts'

export interface TelegramApiProperties {
    credential: string
    messageSidekick: MessageSidekick
}
