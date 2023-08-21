import { Schema, model } from "mongoose";

const locationSchema = new Schema({
  fullName: String,
  city: String,
  country: String,
  images: String,
  zipcode: String,
});

const Location = model("Location", locationSchema);

export default Location;
