import { cwd, env } from 'process';
import packageJson from '../package.json';

const vars = {
  path: cwd(),
  port: Number(env.PORT ?? 3001),
  env: env.NODE_ENV ?? 'development',
  app: {
    name: packageJson.displayName,
    description: packageJson.description,
    version: packageJson.version,
    homepage: packageJson.homepage,
    author: packageJson.author,
  },
  endpoints: {
    api: new URL(env.NEXT_PUBLIC_ENDPOINTS_API ?? 'http://localhost:3000').origin,
  },
  cookies: {
    maxAge: Number(env.NEXT_PUBLIC_MAX_AGE ?? 60 * 60 * 24 * 14), // default 14 days
  },
};

export default vars;
