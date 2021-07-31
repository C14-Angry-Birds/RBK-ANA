const express = require("express");
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const path = require("path");
const db = require("../db/db.js");
const Movie = require("../db/Movie.js");

const port = 3214;
app.use(cors());
app.use(bodyParser.json());
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
app.delete('/movie/:_id', async(req,res)=>{
  try{
    const movie = await Movie.findOneAndDelete({_id:req.params._id})
    res.send(movie)
  }
  catch(error){
    console.log(error)
  }
})
app.patch('/movie/:id',async (req,res)=>{
try{
  const movie = await Movie.findByIdAndUpdate({_id:req.params._id}, req.body,{new:true})
  res.send(movie)
}
catch(error){
  console.log(error)
}
})

// app.get("/:id", (req, res) => {
//   Movie
// .findById(req.params.id)
//     .then((cat) => res.send(cat))
//     .catch((err) => {
//       console.log(err);
//     });
// });
app.listen(port, () => {
  console.log(`movie are available on port ${port}`);
});
