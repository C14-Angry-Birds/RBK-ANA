const express = require("express");
const app = express();
const path = require("path");
const db = require("../db/db.js");
const Movie = require("../db/Movie.js");
var cors = require("cors");
var bodyParser = require("body-parser");
const port = 3214;

app.use(
  express.static(path.join(__dirname, "..", "client", "react-client", "dist"))
);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/movie", (req, res) => {
  Movie.find({}, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.send(result);
  });
});

app.post("/movie", (req, res) => {
  Movie.create(req.body, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`movie are available on port ${port}`);
});
