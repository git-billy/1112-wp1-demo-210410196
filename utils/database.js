const { Pool } = require("pg");

const PORT = 6543;

const pool = new Pool({
  user: "postgres",
  host: "db.hzllwkixijuoqbropnat.supabase.co",
  port: PORT,
  database: "postgres",
  password: "9E2xRMpOGgFCMlv2",
});

console.log(
  `Connect localhost PostgreSQL database ${pool.options.database} on port ${PORT}`
);

// pool.query("SELECT * FROM cart_96", [], (error, results) => {
//   console.log(results.rows);
// });

module.exports = pool;
