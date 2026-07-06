import z from 'zod';

const CredentialsSchema = z.object({
  mistral: z.array(z.object({
    name: z.string(),
    key: z.string(),
  })),

  grok: z.array(z.object({
    name: z.string(),
    key: z.string(),
  })),

  telegramBotToken: z.array(z.object({
    name: z.string(),
    token: z.string(),
  })),
});

export { CredentialsSchema };
