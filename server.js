var priceOps = require("./my_module/priceOperation");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.get('/message',urlencodedParser, function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    message: "Wesh"
  });
});

app.post('/final_price',urlencodedParser, function(req, res) {
  var price = req.body.price; 
  var priceWithTax = priceOps.taxCalcul(price);
  res.setHeader('Content-Type', 'application/json');
  res.json({
    price: priceWithTax 
  });
});




app.listen(8080);
