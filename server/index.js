const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const db = require("../db/db.js");
const Movie = require("../db/Movie.js");
const routerUrl = require("./routers/routerUser")
const port = 3214;


dotenv.config()

mongoose.connect(process.env.MONGO_DB,
  () => console.log("Yes our database is connected"))

app.use("/api", routerUrl)


app.use(
  express.static(path.join(__dirname, "..", "client", "react-client", "dist"))
);
app.use(express.json());

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
