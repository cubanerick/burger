var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3305;

var app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://127.0.0.1:" + PORT);
});
