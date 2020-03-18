const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/bakerydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function(err) {
    if (err) return console.log(err);
    console.log("mongoose is connected");
  }
);

app.use(express.static(__dirname + "/public"));

Product = require("./productSchema");
app.get("/products", function(req, res) {
  Product.find({}, function(err, products) {
    if (err) return console.log(err);
    //console.log(products);
    res.send(products);
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`);
});
