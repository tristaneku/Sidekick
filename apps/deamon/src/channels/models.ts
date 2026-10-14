import type { MessageSidekick } from '@/sidekick/models.ts'

export interface ChannelProperties {
    name: string
    messageSidekick: MessageSidekick
}
