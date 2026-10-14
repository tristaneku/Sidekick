import type { ModelMessage } from 'ai'

export interface TelegramChannelApiProperties {
    messageSidekickCallback: (message: ModelMessage) => void
}
