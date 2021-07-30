
const data = require("./data.json");
const db = require("../db/indexdb.js");
const Cat = require("../db/Cat.js");

Cat.insertMany(data, function (err, result) {
  if (err) throw err;
  console.log("db seeded");
});

