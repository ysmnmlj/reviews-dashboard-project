import { Router } from "express";
import { fetchPlaceReviewsScoped } from "../controllers/googleReviewsController";

const router = Router();

// Exemple : GET /api/google-place/ChIJN1t_tDeuEmsRUsoyG83frY4
router.get("/:placeId", fetchPlaceReviewsScoped);

export default router;
