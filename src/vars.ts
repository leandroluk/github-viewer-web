import packageJson from "../package.json";

const vars = {
  port: Number(import.meta.env.PORT ?? 3001),
  env: import.meta.env ?? "development",
  app: {
    name: packageJson.displayName,
    description: packageJson.description,
    version: packageJson.version,
    homepage: packageJson.homepage,
    author: packageJson.author,
  },
  endpoints: {
    api: new URL(
      import.meta.env.VITE_APP_ENDPOINTS_API ?? "http://localhost:3000",
    ).origin,
  },
  cookies: {
    maxAge: Number(
      import.meta.env.VITE_APP_COOKIE_MAX_AGE ?? 60 * 60 * 24 * 14,
    ), // default 14 days
  },
};

export default vars;
