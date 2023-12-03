import { InferInsertModel, InferSelectModel  } from 'drizzle-orm';
import { integer, sqliteTable, text  } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts',
{
  id: integer('id', { mode: 'number'}).primaryKey({autoIncrement: true}),
  name: text('text').notNull(),
  title: text('text').notNull(),
  type: text('text').notNull(),
  content: text('text').notNull(),
  published: integer('published', { mode: 'boolean' }).notNull().default(false),
  uppdated: integer('updated', { mode: 'boolean' }).notNull().default(false),
  uppdated_at: text('text').notNull(),
  date: text('text').notNull(),
});


export type InsertPost = InferInsertModel <typeof posts>;
export type SelectPost = InferSelectModel <typeof posts>;