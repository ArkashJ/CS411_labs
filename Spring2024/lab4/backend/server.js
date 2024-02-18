// server.js
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); // Import the routes
// call env file
require("dotenv").config();

const usrname = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@postjson.gj7dsf5.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(express.json());
app.use("/", routes); // Use the routes defined in routes.js

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
