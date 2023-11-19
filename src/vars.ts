import packageJson from '../package.json'

export const vars = {
  port: Number(import.meta.env.PORT ?? 3001),
  env: import.meta.env.MODE ?? 'development',
  app: {
    name: packageJson.displayName,
    description: packageJson.description,
    version: packageJson.version,
    homepage: packageJson.homepage,
    author: packageJson.author
  },
  endpoints: {
    api: new URL(import.meta.env.VITE_ENDPOINTS_API ?? 'http://localhost:3000').origin
  }
}