const mongoose = require("mongoose");

const sheetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rows: { type: Array, default: [] }, // Storing rows as an array of objects
});

module.exports = mongoose.model("Sheet", sheetSchema);
