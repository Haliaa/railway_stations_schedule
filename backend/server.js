require("dotenv").config();

const express = require("express");
const expressFileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT, MONGO_URL } = require("./constants/configs");
const { stationsRouter, trainsRouter, schedulesRouter } = require("./routes");

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected!!!");
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressFileUpload());
app.use(cors());

// Route setup
app.use("/trains", trainsRouter);
app.use("/stations", stationsRouter);
app.use("/schedules", schedulesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 400).json({
    error: err.message || "Unknown error",
    code: err.status || 400,
  });
});

const path = require("path");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Catch-all route for 404 errors
app.use("*", (req, res) => {
  res.status(404).json("Route not found");
});

// Determine port and listen
app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}...`);
});
