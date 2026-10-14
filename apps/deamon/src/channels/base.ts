import type { ChannelProperties } from '@/channels/models.ts'
import { channels } from '@/db/schema.ts'
import { db } from '@/db/service.ts'
import { eq } from 'drizzle-orm'

export abstract class Channel {
    messageSidekick
    name
    config: unknown

    constructor({ name, messageSidekick }: ChannelProperties) {
        this.name = name
        this.messageSidekick = messageSidekick
    }

    async initalize() {
        this.config = result[0]
    }

    async updateConfig() {
    }

    abstract sendMessage(text: string): Promise<void>
}
