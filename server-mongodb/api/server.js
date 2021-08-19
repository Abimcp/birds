const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.setEncoding("IS IT A BIRD??");
});

const birdRoutes = require("./controllers/birds");
app.use("/birds", birdRoutes);

// Ornithologists Route

// const ornithologistsRoutes = require("./controllers/ornithologists");
// app.use("/ornithologists", ornithologistsRoutes);

// Root route
app.get("/", (req, res) => res.send("Hello, client!"));

module.exports = app;
