const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  Title: String,
  Gender: String,
  ImageUrl: String,
  Description: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
