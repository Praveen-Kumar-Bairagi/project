const router = require("express").Router();
const knex = require("../database/db");

///////////////////////////login/////////////////////////

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("information")
    .where("email", req.body.email)
    .then((data) => {
      if (data < 1) {
        res.send("1st signup");
      } else if (data[0].password !== req.body.password) {
        res.send("you input wrong password ");
      } else {
        res.send("login succed");
      }
    });
});

module.exports = router;
