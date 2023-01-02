const db = require('../../database');

class UserRepository {
  async create({ email, password }) {
    const [row] = await db.query(`
      INSERT INTO users (email, password)
      VALUES ($1, $2)
      RETURNING *`,
    [email, password]);

    return row;
  }

  async findAll() {
    const rows = await db.query(`
      SELECT id, email FROM users
    `);

    return rows;
  }

  async findEmail(email) {
    const [row] = await db.query(`
      SELECT email
      FROM users
      WHERE email = $1
    `, [email]);

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
