const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const lookupPeople = (name, callback) => {
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    console.log("Searching ...");
    client.query(`SELECT
     * FROM famous_people
      WHERE first_name = $1::text OR last_name = $1::text`,
      [name],
      (err, result) => {
        console.log()
        if (err) {
          return console.error("error running query", err);
        } else {
          callback(result);
        }
      client.end();
      }
    );
  });
}

module.exports = {
  lookupPeople: lookupPeople
}