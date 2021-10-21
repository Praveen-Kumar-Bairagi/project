const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

app.use("/login", require("./routers/forlogin"));
app.use("/signup", require("./routers/forsignup"));
app.use("/password", require("./routers/forpassword"));

const Port = process.env.PORT || 2043;

app.listen(Port, () => {
  console.log(`running.....port ${Port}`);
});
