const express = require("express");
const app = express();
app.use(express.json());

// Sample book data
const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// Status
app.get("/status", (req, res) => {
  res.json({ status: "API is running" });
});

// single book by ID
app.post("/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Add a new book
app.post("/newbook", (req, res) => {
  const { title } = req.body;
  console.log(req.body);
  const duplicate = books.some((book) => book.title === title);

  if (duplicate) {
    res.status(400).json({ error: "Duplicate entry" });
  } else {
    const newBook = { id: books.length + 1, title };
    books.push(newBook);
    res.json({ message: "Book added successfully" });
  }
});

// Start the server
const port = 3005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
