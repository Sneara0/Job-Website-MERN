
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDB from "./config/db.js"; 


import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import jobRoutes from "./routes/job.routes.js";

dotenv.config();


connectDB();

const app = express();

// Middlewares
app.use(cors({ origin: process.env.CLIENT_URL })); 
app.use(express.json()); 
app.use(helmet()); 

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", dashboardRoutes);
app.use("/api/jobs", jobRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 JobHunt Pro API is running...");
});

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler (optional, for server errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
