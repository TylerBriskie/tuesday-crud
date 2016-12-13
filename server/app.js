const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knex = require('../knex');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');

var port = (process.env.PORT || '3000');

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(cors());

app.get('/books',(req, res)=>{
  return knex('book').then(function(books){
    res.send(books);
  });
});

app.get('/book/:id', (req, res)=>{
  knex('book').where('book.id', req.params.id).then(function(book){
    res.send(book);
  });
});

app.delete('/book/:id', (req, res)=>{
  knex.delete().from('book').where('book.id', req.params.id).then(function(){
    res.send("Book Deleted");
  })
})

app.post('/books', (req, res)=>{
  console.log(req.body);
  knex.insert({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image_url: req.body.image_url,
    page_count: req.body.page_count
  }).into('book').then(()=>{
    console.log("successfully added book");
  })
})

app.put('/book/:id', (req, res)=>{
  console.log(req.body);
  knex('book').update({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image_url: req.body.image_url,
    page_count: req.body.page_count
  }).where('book.id', req.params.id).then(function(){
    res.send("Book Updated");
  })
})

app.listen(port, (req, res)=>{
  console.log("listening on port "+ port);
})
