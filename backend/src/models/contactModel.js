const pool = require('../config/db');

const createContactTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      contact_number VARCHAR(20) NOT NULL,
      email_address VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

const insertContact = async (name, contactNumber, emailAddress) => {
  const result = await pool.query(
    `INSERT INTO contacts (name, contact_number, email_address) 
     VALUES ($1, $2, $3) 
     RETURNING id, created_at`,
    [name, contactNumber, emailAddress]
  );
  return result.rows[0];
};

const getAllContacts = async () => {
  const result = await pool.query(`SELECT * FROM contacts ORDER BY created_at DESC`);
  return result.rows;
};

const getContactById = async (id) => {
  const result = await pool.query(`SELECT * FROM contacts WHERE id = $1`, [id]);
  return result.rows[0];
};

module.exports = { createContactTable, insertContact, getAllContacts, getContactById };
