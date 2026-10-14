import type { TelegramApiProperties } from '@/channels/types/telegram/models.ts'
import type { MessageSidekick } from '@/sidekick/models.ts'
import { getCredential } from '@/credentials/service.ts'
import { Bot } from 'npm:grammy@1.46.0'

export class TelegramApi {
    messageSidekick
    credential

    bot?: Bot
    trustedUids?: number[]

    constructor({ credential, messageSidekick }: TelegramApiProperties) {
        this.messageSidekick = messageSidekick
        this.credential = credential

        this.initialize()
    }

    async initialize() {
        const credential = await getCredential('telegram', this.credential)
        const botToken = credential?.value.bot_token

        if (!botToken) {
            throw new Error("Couldn't fetch bot token")
        }

        this.bot = new Bot(botToken)

        this.bot.on('message', async ({ message }) => {
            if (!message.text) return
            await this.messageSidekick({ role: 'user', content: message.text })
        })

        this.bot.start()
    }

    sendMessage() {
    }

    addTrustedUser(uid: number) {
    }
}
