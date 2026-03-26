const { sqliteTable, text, integer } = require('drizzle-orm/sqlite-core');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

const favorites = sqliteTable('favorites', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  url: text('url').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

module.exports = { db, favorites };
