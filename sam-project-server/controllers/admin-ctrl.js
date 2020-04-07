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
      res.status(200).send("okey");
    } else {
      console.log("Credentials wrong");
      res.status(404).send("Login invalid");
    }
  });
};

getHomePage = (req, res) => {
  return res.status(200).redirect("/admhome");
};

module.exports = {
  //getPageAutho,
  makeAuthorization,
  getHomePage
};
