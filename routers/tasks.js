import db from "#db/client";

export async function createTask({ title, done, user_id }) {
  const result = await db.query(
    `INSERT INTO tasks (title, done, user_id)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [title, done, user_id]
  );
  return result.rows[0];
}
