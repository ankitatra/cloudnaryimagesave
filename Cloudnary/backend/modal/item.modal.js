const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  // ... other fields
});

const ItemModel = mongoose.model("Item", itemSchema);