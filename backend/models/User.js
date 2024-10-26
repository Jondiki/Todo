const pool = require('../config/db');

const User = {
  create: async (email, password, pseudo) => {
    const conn = await pool.getConnection();
    const sql = 'INSERT INTO users (email, password, pseudo) VALUES (?, ?, ?)';
    const result = await conn.query(sql, [email, password, pseudo]);
    conn.release();
    return result;
  },

  findByEmail: async (email) => {
    const conn = await pool.getConnection();
    const sql = 'SELECT * FROM users WHERE email = ?';
    const rows = await conn.query(sql, [email]);
    conn.release();
    return rows;
  }
};

module.exports = User;
