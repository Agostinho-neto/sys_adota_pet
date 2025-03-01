import { connect } from './database.js';

async function insertFormulario(formulario) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO formulario(nome_completo, idade, estado_civil, profissao, endereco, bairro, cidade, estado, cep, telefone, email, adota_razao, pet_id, ciente, status, data_criacao) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,1,now()) RETURNING *';
    const values = [
      formulario.nome_completo,
      formulario.idade,
      formulario.estado_civil,
      formulario.profissao,
      formulario.endereco,
      formulario.bairro,
      formulario.cidade,
      formulario.estado,
      formulario.cep,
      formulario.telefone,
      formulario.email,
      formulario.adota_razao,
      formulario.pet_id,
      formulario.ciente,
    ];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getFormularios() {
  const conn = await connect();
  try {
    const res = await conn.query(
      'SELECT formulario.*, pet.nome  FROM formulario inner join pet on (formulario.pet_id = pet.pet_id)'
    );
    return res.rows;
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function getFormulario(id) {
  const conn = await connect();
  try {
    const res = await conn.query(
      'SELECT * FROM formulario WHERE formulario_id = $1',
      [id]
    );
    return res.rows[0];
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function getFormularioByPetIdEmail(email, petId) {
  const conn = await connect();
  try {
    const res = await conn.query(
      'SELECT * FROM formulario WHERE email = $1 and pet_id = $2',
      [email, petId]
    );
    return res.rows;
  } catch (err) {
  } finally {
    conn.release();
  }
}

async function deleteFormularioByPetId(pet_id) {
  const conn = await connect();
  try {
    await conn.query('DELETE FROM formulario WHERE pet_id = $1', [pet_id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateFormularioAdota(formulario) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE formulario SET status=2 WHERE pet_id=$1 and formulario_id=$2 RETURNING *';
    const values = [formulario.pet_id, formulario.formulario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateFormularioDesiste(formulario) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE formulario SET status=3 WHERE formulario_id=$1 RETURNING *';
    const values = [formulario.formulario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateFormularioCanceladoAdocao(formulario) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE formulario SET status = 4 WHERE pet_id = $1 and formulario_id != $2 and status !=3 RETURNING *';
    const values = [formulario.pet_id, formulario.formulario_id];
    const res = await conn.query(sql, values);

    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertFormulario,
  getFormularios,
  deleteFormularioByPetId,
  getFormulario,
  getFormularioByPetIdEmail,
  updateFormularioAdota,
  updateFormularioDesiste,
  updateFormularioCanceladoAdocao,
};
