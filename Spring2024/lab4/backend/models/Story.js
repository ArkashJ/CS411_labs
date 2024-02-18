// models/Story.js
const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  hnId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  url: String,
  createdAt: { type: Date, default: Date.now },
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
