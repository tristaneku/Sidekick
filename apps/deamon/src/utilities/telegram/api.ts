import { Bot } from 'npm:grammy@1.46.0'
import type { TelegramApiPropertries } from '@/utilities/telegram/models.ts'

export class TelegramApi {
    bot: Bot
    userId?: number[]

    constructor(propertries: TelegramApiPropertries) {
        this.bot = new Bot(propertries.botToken)

        this.bot.on('message', ({ message }) => {
            if (!message.text) return

            propertries.messageSidekickCallback(message.text)
        })
    }

    addTrustedUser(uid: number) {
    }
}
