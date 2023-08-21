import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import locationRoutes from "./routes/locationRoutes.js"; // Import locationRoutes

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/locations", locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
