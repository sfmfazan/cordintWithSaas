const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");

// Set up a route for reading student data
app.get("/students", (req, res) => {
  // Read the student.json file
  fs.readFile("student.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Parse the JSON data
    const students = JSON.parse(data);

    // Send the response back
    res.json(students);
  });
});

// Set up a route for adding a new student
app.post("/students", (req, res) => {
  // Read the student.json file
  fs.readFile("student.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Parse the JSON data
    const students = JSON.parse(data);

    // Write the updated data back to the file
    fs.writeFile("student.json", JSON.stringify(students), "utf8", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Send a success response
      res.json({ message: "Student added successfully" });
    });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
