const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const routes = require("./routes/spotify.js");

app.use("/spotify", routes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/labb2", (req, res) => {
  res.send("new endpoint");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
