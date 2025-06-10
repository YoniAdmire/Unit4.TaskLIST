import db from "#db/client";
import bcrypt from "bcrypt";

export async function createUser({ username, password }) {
  const hashed = await bcrypt.hash(password, 10);
  const result = await db.query(
    `INSERT INTO users (username, password)
     VALUES ($1, $2)
     RETURNING id, username`,
    [username, hashed]
  );
  return result.rows[0];
}
