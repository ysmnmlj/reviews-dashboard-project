import express from "express";
import cors from "cors";
import reviewsRouter from "./routes/reviews";

const app = express();
app.use(cors());
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send("Backend Reviews Dashboard is running 🚀");
});

// Routes reviews
app.use("/api/reviews", reviewsRouter);

// Démarrer serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
