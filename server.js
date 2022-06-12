// Requiring Packages
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorResponse = require("./middlewares/error");
const morgan = require("morgan");

// Load Environment Variables
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

// Require Routes
const user = require("./routes/user");
const classes = require("./routes/class");
const auth = require("./routes/auth");

// Initializing App
const app = express();

// Cross Origin Domain
app.use(cors());

app.use(morgan("dev"));

// Use Middlewares
app.use(express.json());

// Use Routes
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/class", classes);

// Custom Error Handling Middleware
app.use(errorResponse);

// Listening to The PORT
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("API Started");
});

app.listen(PORT, function () {
  console.log(`Server Started at PORT ${PORT}`.blue);
});
