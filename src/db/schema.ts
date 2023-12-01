import { InferInsertModel  } from 'drizzle-orm';
import { integer, sqliteTable, text  } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('todos',
{
  id: integer('id', { mode: 'number'}).primaryKey({autoIncrement: true}),
  body: text('text').notNull(),
  published: integer('done', { mode: 'boolean' }).notNull().default(false),
  
});


export type Todo = InferInsertModel <typeof todos>;
