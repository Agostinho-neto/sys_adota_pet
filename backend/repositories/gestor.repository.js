import { connect } from './database.js';

async function getGestores() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM gestor');
    return res.rows;
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function getGestor(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM gestor WHERE gestor_id = $1', [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function deleteGestor(id) {
  const conn = await connect();
  try {
    await conn.query('DELETE FROM gestor WHERE gestor_id = $1', [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  // insertGestor,
  getGestores,
  deleteGestor,
  getGestor,
};

// async function insertGestor(gestor) {
//   const conn = await connect();
//   try {
//     const sql =
//       'INSERT INTO gestor(nome, idade, descricao, url_imagem, ong_id, data_criacao) VALUES ($1,$2,$3,$4,1,now()) RETURNING *';
//     const values = [
//       gestor.nome,
//       gestor.idade,
//       gestor.descricao,
//       gestor.url_imagem,
//     ];
//     const res = await conn.query(sql, values);

//     return res.rows[0];
//   } catch (err) {
//     throw err;
//   } finally {
//     conn.release();
//   }
// }
