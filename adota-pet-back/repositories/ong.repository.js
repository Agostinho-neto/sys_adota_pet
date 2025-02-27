import { connect } from './database.js';

async function insertOng(Ong) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO ong(nome, idade, descricao, url_imagem, ong_id, data_criacao) VALUES ($1,$2,$3,$4,1,now()) RETURNING *';
    const values = [Ong.nome, Ong.idade, Ong.descricao, Ong.url_imagem];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getOngs() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM ong');
    return res.rows;
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function getOng(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM ong WHERE Ong_id = $1', [id]);
    return res.rows[0];
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function deleteOng(id) {
  const conn = await connect();
  try {
    await conn.query('DELETE FROM ong WHERE Ong_id = $1', [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertOng,
  getOngs,
  deleteOng,
  getOng,
};
