import { KV } from '@/storage/kv.ts';
import { CredentialsSchema } from '@/credentials/schema.ts';
import { TCredentials } from '@/credentials/models.ts';

const CredentailsKV = new KV('credentials', CredentialsSchema);

function saveCredential<T extends keyof TCredentials>(type: T, content: TCredentials[T][number]) {
  const prev = CredentailsKV.get(type) ?? [];
  const next = [...prev, content] as TCredentials[T];

  CredentailsKV.save(type, next);
}

function getCredential(type: keyof TCredentials, name: ) {
  CredentailsKV.get(type);
}

export { getCredential, saveCredential };
