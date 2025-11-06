import mongoose from "mongoose";

import { DB_URL, NODE_ENV } from "../config/env.js";

if (!DB_URL) {
  throw new Error(
    "Please define the MONGODB URL environment variable inside .env.<development/production>.local"
  );
}

// Connect to MONGODB
const connectTODatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to MONGODB in ${NODE_ENV} mode`)
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

export default connectTODatabase;
