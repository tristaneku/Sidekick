import type { ChannelProperties } from '@/channels/models.ts'

export abstract class Channel {
    messageSidekick
    config

    constructor({ messageSidekick, config }: ChannelProperties) {
        this.messageSidekick = messageSidekick
        this.config = config
    }

    updateConfig() {
    }
}
