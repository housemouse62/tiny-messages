import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(name, message) {
  await pool.query("INSERT INTO messages (name, message) VALUES ($1, $2)", [
    name,
    message,
  ]);
}

export default { getAllMessages, addMessage };
