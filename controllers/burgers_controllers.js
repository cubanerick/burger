var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      console.log(data);
      res.render("index", {burger: data});
    });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  var devour = true;
  console.log("devoured", devour);

  burger.updateOne(devour, id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/newburger", function(req, res) {
  var newBurger = req.body.newBurger;
  console.log(newBurger);
  burger.insertOne(newBurger, function(result) {
    res.end();
  });
});

module.exports = router;