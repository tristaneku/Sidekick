import { dirname, join } from 'jsr:@std/path@1';
import { Database } from 'jsr:@db/sqlite@0.13.0';
import { ensureDir } from 'jsr:@std/fs@1.0.23';

function getAppPath() {
  const dataPath = join('Sidekick', 'data.db');

  const home = Deno.env.get('HOME');
  const appData = Deno.env.get('APPDATA');

  switch (Deno.build.os) {
    case 'linux':
      if (!home) return dataPath;
      return join(home, '.local', 'share', dataPath);

    case 'darwin':
      if (!home) return dataPath;
      return join(home, 'Library', 'Application Support', dataPath);

    case 'windows':
      if (!appData) return dataPath;
      return join(appData, dataPath);

    default:
      return dataPath;
  }
}

const path = getAppPath();

await ensureDir(dirname(path));
const db = new Database(path);

export { db };
