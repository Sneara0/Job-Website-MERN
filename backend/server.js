// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const jobRoutes = require("./routes/job.routes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",                   
  process.env.CLIENT_URL?.replace(/\/$/, ""), 
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
    
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);

// ✅ Other Middlewares
app.use(express.json());
app.use(helmet());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", dashboardRoutes);
app.use("/api/jobs", jobRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 JobHunt Pro API is running...");
});

// ✅ Global 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
