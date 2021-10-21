const nodemailer = require("nodemailer");
require("dotenv").config();
const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

module.exports = transpoter;
