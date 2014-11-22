var mysql      = require('mysql');
var database = mysql.createConnection({
  database: "chat",
  user     : 'root',
  password : ''
});


var query = function(queryString,callback) {
  // db.connect();
  database.query(queryString,callback);
  // db.end();
}

// var insert = function(table,columns,values) {
//   db.query("INSERT INTO " + table +"(" + columns + ") VALUES (" + values + ");"), function(err, result){
//     if(err) throw err;
//     return result;
//   }
// }

// insert(users, username, 'Marcus Phillips');
// query('SELECT * FROM users;');

// query("INSERT INTO users (username) VALUES ('Kim Klon');");
// // query("INSERT INTO users (username) VALUES ('Thomas Klon');");
// var something = query('SELECT * FROM users;');
// console.log(something);

exports.query = query;

