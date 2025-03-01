import { connect } from './database.js';

async function insertPet(pet) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO pet(nome, idade, descricao, url_imagem, ong_id, pet_status, data_criacao) VALUES ($1,$2,$3,$4,1,1,now()) RETURNING *';
    const values = [pet.nome, pet.idade, pet.descricao, pet.url_imagem];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getPets() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM pet');
    return res.rows;
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function getPet(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM pet WHERE pet_id = $1', [id]);
    return res.rows[0];
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function deletePet(id) {
  const conn = await connect();
  try {
    await conn.query('DELETE FROM pet WHERE pet_id = $1 and pet_status = 1', [
      id,
    ]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updatePetStatus(petStatus) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE pet SET pet_status=2 WHERE pet_id=$1 and pet_status != 3 RETURNING *';
    const values = [petStatus.pet_id];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertPet,
  getPets,
  deletePet,
  getPet,
  updatePetStatus,
};
