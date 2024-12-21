import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);
