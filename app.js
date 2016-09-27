const lookup_people = require('./lookup_people')

var name = process.argv[2];


lookup_people.lookupPeople(name, (result) => {

  console.log(`Found ${result.rowCount} person(s) by the name "${name}":\n -${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born ${result.rows[0].birthdate}`); //output: 1

});

