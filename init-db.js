const { favorites } = require('./db');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
const { db } = require('./db');

// This is a simple migration script to ensure the table exists
// In a real project, we'd use drizzle-kit for proper migrations
db.run('CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT NOT NULL, created_at INTEGER)');
console.log('Database initialized');
