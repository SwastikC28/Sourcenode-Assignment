// Requiring Packages
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorResponse = require("./middlewares/error");

// Load Environment Variables
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

// Require Routes
const user = require("./routes/user");
const classes = require("./routes/user");

// Initializing App
const app = express();

// Cross Origin Domain
app.use(cors());

// Use Middlewares
app.use(errorResponse);
app.use(express.json());

// Use Routes
app.use("/api/user", user);
app.use("/api/class", classes);

// Listening to The PORT
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("API Started");
});

app.listen(PORT, function () {
  console.log(`Server Started at PORT ${PORT}`.blue);
});
