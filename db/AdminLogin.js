const mongoose = require("mongoose");

const AdminLoginSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const Login = mongoose.model("Login", AdminLoginSchema);

module.exports = Login;
