const express = require("express");
const router = express.Router();
const fs = require("fs");

const filePath = "./sheets.json";

// ✅ Load sheets from file
let sheets = {};
if (fs.existsSync(filePath)) {
  sheets = JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// ✅ Save sheets to file
const saveSheets = () => {
  fs.writeFileSync(filePath, JSON.stringify(sheets, null, 2));
};

// ✅ Get All Sheets
router.get("/", (req, res) => {
  res.json(Object.keys(sheets).map((name) => ({ name }))); // Send an array of sheet names
});

// ✅ Create a New Sheet
router.post("/", (req, res) => {
  const { sheetName } = req.body;
  if (!sheetName) {
    return res.status(400).json({ message: "Sheet name is required" });
  }

  if (sheets[sheetName]) {
    return res.status(400).json({ message: "Sheet already exists" });
  }

  sheets[sheetName] = {
    rows: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };
  saveSheets();
  res.status(201).json({ message: "Sheet created successfully", sheetName });
});

// ✅ Delete a Spreadsheet
router.delete("/:sheetName", (req, res) => {
  const { sheetName } = req.params;
  if (!sheets[sheetName]) {
    return res.status(404).json({ message: "Sheet not found" });
  }

  delete sheets[sheetName];
  saveSheets();
  res.json({ message: "Sheet deleted successfully" });
});

module.exports = router;
