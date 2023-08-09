import express from "express";
import mongoose from "mongoose";
import { router as hotelsRouter } from "./routes/hotels.js";

const app = express();

app.use(express.json());

app.use("/hotels", hotelsRouter);

mongoose.connect("mongodb://localhost:27017/hotelApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
