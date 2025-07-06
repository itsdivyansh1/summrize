import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import { summarizeText } from "../services/summarizer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    const file = req.file;
    console.log(file);

    if (!file || !file.originalname.endsWith(".pdf")) {
      res.status(400).json({ error: "Please upload a valid PDF file." });
      return;
    }

    const parsed = await pdfParse(file.buffer);
    const summary = await summarizeText(parsed.text);
    console.log(parsed);

    res.json({ summary });
  } catch (err) {
    console.error("PDF summarization failed:", err);
    res.status(500).json({ error: "Failed to summarize PDF." });
  }
});

export default router;
