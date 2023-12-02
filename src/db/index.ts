import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

import * as schema from "./schema";

const client = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_API_TOKEN!,
});

export const db = drizzle(client, {schema, logger: true});