import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config(); // Load .env

async function listModels() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const models = await ai.models.list();
  console.log(models);
}

listModels();
