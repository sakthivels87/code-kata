const config = require("config");
const mongoose = require("mongoose");

module.exports = function () {
  const db = "cluster0.bfkmcm7.mongodb.net/?retryWrites=true&w=majority";
  const user = process.env.sakthi_mongodbUser;
  const pass = process.env.sakthi_mongodbPass;
  const connection_str = `mongodb+srv://${user}:${pass}@${db}`;

  mongoose
    .connect(connection_str)
    .then(() => console.log(`Connected to ${db}...`));
};
