import { Bot } from 'npm:grammy@1.46.0'
import type { TelegramApiPropertries } from './models.ts'
import { getCredential } from '@/credentials/service.ts'

export class TelegramApi {
    propertries: TelegramApiPropertries

    bot?: Bot
    trustedUids?: number[]

    constructor(propertries: TelegramApiPropertries) {
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

        this.bot.on('message', (ctx) => {})

        this.bot.start()
    }

    addTrustedUser(uid: number) {
    }
}
