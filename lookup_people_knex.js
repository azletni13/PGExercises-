const settings = require("./settings"); // settings.json
const pg = require("pg");

const knex = require("knex")({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

var name = process.argv[2];

knex.select().from('famous_people')
.where('first_name', name).orWhere('last_name', name)
.then(function(result){
  console.log("Searching ...")
  // console.log(result[0].id)
  console.log(`Found ${result.length} person(s) by the name "${name}":\n -${result[0].id}: ${result[0].first_name} ${result[0].last_name}, born ${result[0].birthdate}`);
})
.finally(function() {
knex.destroy();
});
