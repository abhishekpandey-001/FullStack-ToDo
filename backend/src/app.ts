import express from "express";
import { errorHandler } from "./middlewares/error.middleware.js";

export const app = express();

// Middlewares
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("The API is working 🚀");
});

app.use(errorHandler);