// index.js
import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
