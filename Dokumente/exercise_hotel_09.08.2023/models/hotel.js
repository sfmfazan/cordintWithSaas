// models/hotel.js
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: String,
  minimum_night: Number,
  maximum_night: Number,
  space: String,
  cancellation_policy: String,
  first_review: Date,
  last_review: Date,
  room_type: String,
  bedrooms: Number,
  beds: Number,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
