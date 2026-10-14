import { Bot } from 'npm:grammy@1.46.0'
import { getCredential } from '@/credentials/service.ts'
import type { TelegramChannelApiProperties } from '@/channels/types/telegram/models.ts'

export class TelegramChannelApi {
    propertries: TelegramChannelApiProperties

    bot?: Bot
    trustedUids?: number[]

    constructor(propertries: TelegramChannelApiProperties) {
        this.propertries = propertries

        this.initialize()
    }

    async initialize() {
        const credential = await getCredential('telegram', this.propertries.botToken)
        const botToken = credential?.value.bot_token

        if (!botToken) {
            throw new Error("Couldn't fetch bot token")
        }

        this.bot = new Bot(botToken)

        this.bot.on('message', (ctx) => {
            this.propertries.messageSidekickCallback()
        })

        this.bot.start()
    }

    addTrustedUser(uid: number) {
    }
}
