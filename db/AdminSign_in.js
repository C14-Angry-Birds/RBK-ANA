const mongoose = require("mongoose");

const AdminSign_inSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  password2: String,
});
const AdminSign_in = mongoose.model("AdminSign_in", AdminSign_inSchema);

module.exports = AdminSign_in;
