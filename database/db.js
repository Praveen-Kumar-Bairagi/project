require("dotenv").config();

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
  },
});

knex.schema
  .createTable("information", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password", 8).notNullable();
    table.unique("Number", 10).notNullable();
  })
  .then(() => {
    console.log("table created");
  })
  .catch((a) => {
    console.log("table already ctreated");
  });

module.exports = knex;
