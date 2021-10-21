const router = require("express").Router();
const knex = require("../database/db");

/////////////////////signup///////////////////
router.post("/", (req, res) => {
  knex
    .select("*")
    .from("information")
    .where("email", req.body.email)
    .then((data) => {
      if (data.length < 1) {
        const userdata = {
          id: req.body.id,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          Number: req.body.Number,
        };
        knex("information")
          .insert(userdata)
          .then((data) => {
            res.send({ data: "insert" });
          });
      } else {
        res.send("data already exits you can login");
      }
    });
});

module.exports = router;
