const express = require("express");
const router = express.Router();

const Bird = require("../models/bird");

// birds index route
router.get("/", async (req, res) => {
  try {
    const Bird = await Bird.all;
    res.json({ birds });
  } catch (err) {
    res.status(500).json({ err });
  }
});




module.exports = router;
