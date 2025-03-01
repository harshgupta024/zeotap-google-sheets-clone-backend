const express = require("express");
const cors = require("cors");
const sheetRoutes = require("./routes/sheetRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Make sure this is correct
app.use("/api/sheets", sheetRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
