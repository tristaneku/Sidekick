import type { MessageSidekick } from '@/sidekick/models.ts'

export interface ChannelProperties {
    messageSidekick: MessageSidekick
    config: object
}
