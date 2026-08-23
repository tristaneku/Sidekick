import z from 'zod';

const OrchestratorSchema = z.object({
  sidekicks: z.array(z.object({
    name: z.string(),
    instructions: z.string(),
    brain: z.string(),
    windowContext: z.number(),
    maxSteps: z.number(),
    tools: z.object({
      memory: z.object({
        enabled: z.boolean(),
      }),

      skills: z.object({
        enabled: z.boolean(),
      }),

      telegram: z.object({
        enabled: z.boolean(),
        credential: z.string(),
      }),

      voice: z.object({
        enabled: z.boolean(),
        sipCredential: z.string(),
        modelCredential: z.string(),
      }),
    }),
  })),
});
