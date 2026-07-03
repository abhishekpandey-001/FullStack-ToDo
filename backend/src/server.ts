import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`❌ Failed to start the server.`);

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    process.exit(1);
  }
};
startServer();
