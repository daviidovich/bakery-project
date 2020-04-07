const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const adminRouter = require("./routes/admin-router");
const customRouter = require("./routes/custom-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", customRouter);
app.use("/admin", adminRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
