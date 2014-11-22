var mysql      = require('mysql');


var db = mysql.createConnection({
  database: "chat",
  user     : 'root',
  password : ''
});

db.connect();

var query = function(queryString) {
  db.query(queryString,function(err,result) {
    if (err) throw err;
    return result;
  });
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

db.end();
