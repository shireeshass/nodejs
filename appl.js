var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("blueberry");
});

app.listen(4000);



