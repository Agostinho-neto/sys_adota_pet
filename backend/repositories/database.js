import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      'postgres://zuzgiinl:Ev9_m5G6Gyx1Hobc3Bvev4A_xUP-1oXg@jelani.db.elephantsql.com/zuzgiinl',
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
