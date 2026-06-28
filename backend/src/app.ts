import express from "express";

export const app = express();

// Middlewares
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.send("The API is working 🚀");
});