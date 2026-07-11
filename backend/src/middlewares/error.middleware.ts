import type { ErrorRequestHandler } from "express";
import { ApiError } from "../utils/ApiError.js";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = " Internal server error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};