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

  sip: z.array(z.object({
    name: z.string(),
    key: z.object({
      username: z.string(),
      password: z.string(),
    }),
  })),

  telegramBot: z.array(z.object({
    name: z.string(),
    key: z.string(),
  })),
});

export { CredentialsSchema };
