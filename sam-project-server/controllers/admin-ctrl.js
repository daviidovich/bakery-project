const db = require("../db/index");

// getPageAutho = (req, res) => {
//   res.sendFile(__dirname + "/authorization.html");
// };

makeAuthorization = (req, res) => {
  db.collection("admins").findOne({ login: req.body.login }, function(
    err,
    admin
  ) {
    console.log("User found");
    // In case the user not found
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      res.send(err);
    }
    if (admin && admin.password === req.body.password) {
      console.log("User and password is correct");
      res.status(200).getHomePage();
    } else {
      console.log("Credentials wrong");
      res.status(404).send("Login invalid");
    }
  });
};

getHomePage = (req, res) => {
  res.redirect("/admin/home");
};

module.exports = {
  //getPageAutho,
  makeAuthorization,
  getHomePage
};
