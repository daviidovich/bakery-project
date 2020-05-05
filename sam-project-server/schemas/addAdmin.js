const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/bakery",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function(err) {
    if (err) return console.log(err);
    console.log("mongoose is connected");
  }
);

Admin = require("./adminSchema");
const admin = new Admin({
  login: "superadmin111",
  password: "123"
});

admin.save(function(err) {
  mongoose.disconnect(); // отключение от базы данных

  if (err) return console.log(err);
  console.log("Сохранен объект", admin);
});
