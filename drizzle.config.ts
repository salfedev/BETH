import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_API_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config;