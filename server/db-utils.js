const { Pool, Client } = require('pg');

module.exports = {
    _,
    isEmpty,
  query,
  transactional
};

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ik',
  password: '1',
  port: 5432
});

function _(val, def) {
  if (!val) return def;
  return val;
}

function isEmpty(val, def) {
  if (val === '') return def;
  return val;
}

async function query(sql, params) {
	return await pool.query(sql, params);
}

async function transactional(prmFunction) {
    try {
        await query("BEGIN");
        await prmFunction(query);
        await query("COMMIT");
    } catch (e) {
        console.log("hatayla karşılaşıldı-ROLLBACK");
        await query("ROLLBACK");
        throw e;
    }
}
