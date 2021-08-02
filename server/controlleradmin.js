const AdminSign_in = require("../db/AdminSign_in.js");

exports.add = async (req, res) => {
  console.log(req.body);
  try {
    const signed = await AdminSign_in.create(req.body);
    res.send(signed);
  } catch (err) {
    console.error(err);
  }
};

exports.getAll = (req, res) => {
  AdminSign_in.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
