import express from "express";
import userRouter from "routers/users.js";
import taskRouter from "#routers/tasks.js";
import authenticate from "#middleware";

const app = express();
export default app;

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", authenticate, taskRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
