import type { MessageSidekick } from '@/sidekick/models.ts'

export abstract class Channel {
    messageSidekick: MessageSidekick

    constructor(messageSidekick: MessageSidekick) {
        this.messageSidekick = messageSidekick
    }
}
