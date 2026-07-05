import { join } from 'path';
import { Database } from 'sqlite';

const appPath = () => {
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
};

const db = new Database(appPath());

export { db };
