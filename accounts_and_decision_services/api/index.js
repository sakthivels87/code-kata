const express = require("express");
const cors = require("cors");
const accounts = require("./routes/accounts");
const decisionEngine = require("./routes/decision-engine");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/balance-sheet", accounts);
app.use("/api/v1/decision-engine", decisionEngine);

//app.listen(3000, () => console.log("Successfully listening on Port 3000"));
module.exports = app;
