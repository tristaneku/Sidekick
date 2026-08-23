import { KV } from '@/storage/kv.ts';
import { CredentialsSchema } from '@/credentials/schema.ts';
import { TCredentials } from '@/credentials/models.ts';

const CredentailsKV = new KV('credentials', CredentialsSchema);

function getCredentials(type: keyof TCredentials) {
  return CredentailsKV.get(type);
}

function saveCredential<T extends keyof TCredentials>(
  type: T,
  name: TCredentials[T][number]['name'],
  key: TCredentials[T][number]['key'],
) {
  const prev = getCredentials(type) ?? [];
  const same = prev.find((c) => c.name === name);

  if (same) throw new Error('Credential name has to be unique');

  const next = [...prev, { name, key }] as TCredentials[T];

  CredentailsKV.save(type, next);
}

function getCredentialKey(type: keyof TCredentials, name: string) {
  const credentials = getCredentials(type);

  const credential = credentials?.find((c) => c.name === name);

  if (!credential) throw new Error('Credential not found');

  return credential.key;
}

export { getCredentialKey, getCredentials, saveCredential };
