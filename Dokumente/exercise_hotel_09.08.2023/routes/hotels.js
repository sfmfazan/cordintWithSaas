import express from "express";
const router = express.Router();
import Hotel from "../models/hotel.js";

router.post("/add", async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/find/:name", async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ name: req.params.name });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/update/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    await Hotel.deleteOne({ _id: req.params.id });
    res.json({ message: "Hotel deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router };
