import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Charger le fichier JSON
const dataPath = path.join(__dirname, "../data/reviews.json");

// GET all reviews
router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const reviews = JSON.parse(data);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Unable to read reviews file" });
  }
});

// GET a single review by ID
router.get("/:id", (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    const reviews = JSON.parse(data);
    const review = reviews.find((r: any) => r.id == req.params.id);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Unable to read reviews file" });
  }
});

export default router;
