const { Pool } = require('pg');

let pool;

if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    user: 'postgres',
    host: process.env.SUPABASE_HOST,
    port: '5432',
    database: 'postgres',
    password: process.env.SUPABASE_PASSWORD,
  });
  console.log(
    `Connecting SUPABASE PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5433',
    database: 'midterm_96',
    password: '0000',
  });
  console.log(
    `Connecting local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
}

module.exports = pool;
