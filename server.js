// Express framework import kar rahe hain
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js';

// .env file load karo
dotenv.config();

// Express application create karo
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); 

// Home route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use('/api/auth', authRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server Healthy"
  });
});

// Server kis port par chalega
const PORT = process.env.PORT || 5000;
// Server start karo
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});