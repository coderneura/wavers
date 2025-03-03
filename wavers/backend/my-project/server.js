import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));