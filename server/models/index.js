var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      var sendResponse = function(err,rows) {
        if (err) {console.log('err');}
        var storage = {};
        storage.results = rows;
        res.send(storage);
      }
      db.query('SELECT * FROM messages;',sendResponse);
    }, // a function which produces all the messages
    post: function () {

      //write to database
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

