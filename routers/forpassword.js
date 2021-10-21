const router = require("express").Router();
const knex = require("../database/db");
const transpoter = require("../Auth/mailer");

///////////////////////////password/////////////////////////
router.put("/", (req, res) => {
  knex("information")
    .where("email", "=", req.body.email)
    .update({
      password: req.body.password,
    })
    .then((data) => {
      console.log(data);
      var mailoption = {
        from: process.env.user,
        to: req.body.email,
        subject: "password change",
        text: "your password change succesfully",
      };
      transpoter.sendMail(mailoption, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("email send");
        }
      });
    })
    .catch((er) => {
      console.log(er);
      res.json({ message: er });
    });
});

module.exports = router;
