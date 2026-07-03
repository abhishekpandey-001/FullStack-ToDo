import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  const connection = await mongoose.connect(process.env.MONGODB_URI);

  console.log(`✅ MongoDB Connected: ${connection.connection.host}`);
};
