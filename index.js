const pool = require("./src/config/db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection failed ❌", err);
  } else {
    console.log("DB connected ✅", res.rows[0]);
  }
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CollabNote backend is running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

