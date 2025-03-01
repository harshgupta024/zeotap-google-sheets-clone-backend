const Sheet = require("../models/Sheet");

// Create a new sheet
exports.createSheet = async (req, res) => {
  try {
    const sheet = new Sheet({ name: req.body.name, rows: [] });
    await sheet.save();
    res.status(201).json(sheet);
  } catch (error) {
    res.status(500).json({ message: "Error creating sheet", error });
  }
};

// Fetch all sheets
exports.getSheets = async (req, res) => {
  try {
    const sheets = await Sheet.find();
    res.status(200).json(sheets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sheets", error });
  }
};

// Add data to a sheet
exports.addRow = async (req, res) => {
  try {
    const { sheetId } = req.params;
    const { row } = req.body;

    const sheet = await Sheet.findById(sheetId);
    if (!sheet) return res.status(404).json({ message: "Sheet not found" });

    sheet.rows.push(row);
    await sheet.save();

    res.status(200).json(sheet);
  } catch (error) {
    res.status(500).json({ message: "Error adding row", error });
  }
};
