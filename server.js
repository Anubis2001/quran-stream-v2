const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Serve static files (frontend UI)
app.use(express.static(path.join(__dirname, "public")));

// Serve Quran folder (HLS playlist and segment files)
app.use("/quran", express.static(path.join(__dirname, "quran")));

// Return all folder names under the "quran" directory
app.get("/sheikhs", (req, res) => {
  try {
    const folders = fs
      .readdirSync(path.join(__dirname, "quran"), { withFileTypes: true })
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

    res.json(folders);
  } catch (err) {
    console.error("Error reading quran folder:", err);
    res.status(500).json({ error: "Error reading quran folders" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});