var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      return db.query('SELECT * FROM messages;');
      //get messages from database

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

