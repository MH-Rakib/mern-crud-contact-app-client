const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: String,
  status: String,
});

const userInfo = mongoose.model("userInfo", schema);

module.exports = userInfo;
