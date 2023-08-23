import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
app.use(bodyParser.json());

// Route to hide the secret message
app.post("/my/secret/hide", (req, res) => {
  const { secret_message } = req.body;

  // Generate a random ID
  const id = Math.floor(Math.random() * 10000);

  // Hash the secret_message using bcrypt and 15 rounds of salts
  const saltRounds = 15;

  //  const saltRound = bcrypt.genSaltSync(15)(both are same)

  bcrypt.hash(secret_message, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred" });
    }

    // Create the object data with id, original secret_message, and hashed secret_message
    const objectData = {
      id,
      original_secret_message: secret_message,
      hashed_secret_message: hash,
    };

    // Return the object data as JSON response
    res.json(objectData);
  });
});
// final call of server
app.listen(5000, () => console.log("My server is running on Port 5000"));
