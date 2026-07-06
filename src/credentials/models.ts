import { z } from 'zod';
import { CredentialsSchema } from './schema.ts';

type TCredentials = z.infer<typeof CredentialsSchema>;

export type { TCredentials };
