var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, colname, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + colname + ") " + "VALUES (" + val + ")";
  
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
        });
    },
    updateOne: function(table, colname, val, id, cb) {
        var queryString = "UPDATE " + table + " SET " + colname + "=" + val + " WHERE id = " + id; 

        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
            throw err;
            }

            cb(result);
        });
    },
   
};
  
module.exports = orm;
  