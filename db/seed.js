import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed(){
  
  const user = await createUser({ username: 'testuser', password: 'password123' });
  await createTask({ title: 'Buy groceries', done: false, user_id: user.id });
  await createTask({ title: 'Do homework', done: true, user_id: user.id });
  await createTask({ title: 'Read a book', done: false, user_id: user.id });
}
