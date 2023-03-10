const db = require('../../database');

class UserRepository {
  async create({ name, email, password }) {
    const [row] = await db.query(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *`,
    [name, email, password]);

    return row;
  }

  async findEmail(email) {
    const [row] = await db.query(`
      SELECT email
      FROM users
      WHERE email = $1
    `, [email]);

    return row;
  }

  async findUserById(id) {
    const [row] = await db.query(`
      SELECT *
      FROM users
      WHERE id = $1
    `, [id]);

    return row;
  }

  async findUserByEmail(email) {
    const [row] = await db.query(`
      SELECT *
      FROM users
      WHERE email = $1
    `, [email]);

    return row;
  }
}

module.exports = new UserRepository();
