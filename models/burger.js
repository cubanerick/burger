var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(val, cb){
        orm.insertOne("burgers", "burger_name", val, function(res){
            cb(res);
        });
    },
    updateOne: function(val, id, cb){
        orm.updateOne("burgers", "devoured", val, id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;