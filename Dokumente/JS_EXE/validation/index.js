import express from "express";
import { validationResult, body } from "express-validator";
import mongoose from "mongoose";
import User from "./models/user.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/validateDB")
  .then(() => {
    console.log("database is connected");
  })
  .catch(() => {
    console.log("database is not connected");
  });

app.post(
  "/login",
  [
    body("username").notEmpty().withMessage("Username cannot be empty"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
    body("email").custom(async (value) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        throw new Error("Email is already in use");
      }
      return true;
    }),
    body("email").custom(async (value) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        throw new Error("Email is already in use");
      }
      return true;
    }),
    body("newEmail").custom(async (value, { req }) => {
      if (value !== req.body.email) {
        const existingUserWithNewEmail = await User.findOne({ email: value });
        if (existingUserWithNewEmail) {
          throw new Error("New email is already in use");
        }
      }
      return true;
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    // Create a new user and add to the database
    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.status(201).json(newUser);
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
