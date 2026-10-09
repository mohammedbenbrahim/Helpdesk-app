require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "helpdesk-api",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`API running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();