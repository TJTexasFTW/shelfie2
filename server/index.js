const express = require("express");
const app = express();
const controller = require("./controller");

app.use(express.json());	//this allows us to use the body of the request





app.listen(3060, () => console.log("Listening on 3060"));