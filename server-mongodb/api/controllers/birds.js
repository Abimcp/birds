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

// birds show route
router.get("/:id", async (req, res) => {
  try {
    const bird = await Bird.findById(req.params.id);
    res.json(bird);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// Create birds route
router.post("/", async (req, res) => {
  try {
    const bird = await Bird.create(req.body.name, req.body.age);
    res.json(bird);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// birds update route
router.patch("/:id", async (req, res) => {
  try {
    const bird = await bird.findById(req.params.id);
    const updatedBird = await bird.update();
    res.json({ bird: updatedBird });
  } catch (err) {
    res.status(500).json({ err });
  }
});

// delete bird route
router.delete("/:id", async (req, res) => {
  try {
    const bird = await Bird.findById(req.params.id);
    await bird.destroy();
    res.status(204).json("Bird deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
