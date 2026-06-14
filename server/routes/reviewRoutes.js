const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST review
router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const review = await Review.create({
      name: req.body.name,
      review: req.body.review
    });

    res.status(201).json(review);
  } catch (err) {
    console.log("POST ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.log("GET ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;