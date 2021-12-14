const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const likeRoute = require("./Routes/likeMethods");
const rankRoute = require("./Routes/rankMethods");

const app = express();
const Port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.use("/likes", likeRoute);
app.use("/ranks", rankRoute);
app.listen(process.env.PORT || 3000);

