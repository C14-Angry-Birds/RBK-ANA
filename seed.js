const data = require("./data.json");
const db = require("./db/db.js");
const Movie = require("./db/Movie.js");

Movie.insertMany(data, function (err, result) {
  if (err) throw err;
  console.log("db seeded");
});
