import express from "express";
import Location from "../models/location.js";

const router = express.Router();

// Create a new location
router.post("/create", async (req, res) => {
  const newLocationData = req.body;

  try {
    const newLocation = await Location.create(newLocationData);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: "Failed to create location" });
  }
});

// Find locations using 'where'
router.get("/where", async (req, res) => {
  const { country, fullname } = req.query;

  try {
    const locations = await Location.find({
      country: country,
      fullName: fullname,
    });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

// ascending and descending order
router.get("/sort/:order", async (req, res) => {
  const order = req.params.order;

  try {
    const locations = await Location.find().sort({ fullName: order });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

// Limit data and skip first 2 locations
router.get("/limit-skip", async (req, res) => {
  try {
    const locations = await Location.find().limit(3).skip(2);
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

// the city and fullname
router.get("/count", async (req, res) => {
  try {
    const cityCount = await Location.countDocuments({
      city: { $exists: true },
    });
    const fullnameCount = await Location.countDocuments({
      fullName: { $exists: true },
    });
    res.json({ cityCount, fullnameCount });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch counts" });
  }
});

// Query to exclude city and country
router.get("/exclude-city-country", async (req, res) => {
  try {
    const locations = await Location.find({}, { city: 0, country: 0 });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

// Query to print fullname and zipcode
router.get("/fullname-zipcode", async (req, res) => {
  try {
    const locations = await Location.find(
      {},
      { fullName: 1, zipcode: 1, _id: 0 }
    );
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

// Query using $nor and $or operators
router.get("/nor-or", async (req, res) => {
  try {
    const locations = await Location.find({
      $or: [{ city: "New York" }, { country: "USA" }],
      $nor: [{ zipcode: 10001 }, { zipcode: 20001 }],
    });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

export default router;
