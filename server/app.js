const express=require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = (process.env.PORT || '3000');

app.listen(port, (req, res)=>{
  console.log("listening on port "+ port);
})
