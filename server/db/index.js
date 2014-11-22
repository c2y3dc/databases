var mysql      = require('mysql');


var db = mysql.createConnection({
  database: "chat",
  user     : 'root',
  password : ''
});

db.connect();

// // module.exports = {
//   query: function(queryArgurments){
//     db.query(queryArgurments, function(err, results) {
//   if (err) throw err;
//   return results;
//     });
//   }
// }
db.query("INSERT INTO users (username) VALUES ('Thomas Klon');");
db.query('SELECT * FROM users;', function(err, result) {
  if (err) throw err;

  console.log('The solution is: ', result);
});

// module.exports = {}

db.end();
