import { Router } from "express";
import { getAllReviews, getReviewById } from "../controllers/reviewsController";

const router = Router();

// Liste de toutes les reviews
router.get("/", getAllReviews);

// Une seule review par ID
router.get("/:id", getReviewById);



export default router;
