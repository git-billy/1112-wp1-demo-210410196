const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "db.hzllwkixijuoqbropnat.supabase.co",
  port: 5432,
  database: "postgres",
  password: "0p;/(OL>8ik,",
});

console.log("connect database", pool.options.database);

module.exports = pool;
