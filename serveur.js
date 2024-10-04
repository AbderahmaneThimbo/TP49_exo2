import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();
const PORT = 3100;

app.use(helmet());
app.use(cors());
// Middleware pour limiter le nombre de requêtes (100 requêtes max par 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.get("/hello", (_req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
