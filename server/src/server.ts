import dotenv from "dotenv";
dotenv.config();

import { Request } from "express";
import express from "express";
import cors from "cors";
import summarizeRoute from "./routes/summarize";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors<Request>());
app.use(express.json());

app.use("/api/summarize", summarizeRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
