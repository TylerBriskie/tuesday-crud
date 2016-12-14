$(document).ready(function(){
  // const bodyParser=require('body-parser');

  console.log('let\'s see those books');

  $.get('https://tdb-library.herokuapp.com/books/', populateBooks, 'json');


  function populateBooks(data){
    console.log("returning data");
    $('.my_books').html('')
    for (var i = 0; i < data.length; i++) {
      var thisId = data[i].id;
      var newTitle = data[i].title;
      var newAuthor = data[i].author;
      var newGenre = data[i].genre;
      var newImage = data[i].image_url;
      var newPages = data[i].page_count;
      $('.my_books').append(`
        <div class="a_book">
        <a href="single_book.html?id=${thisId}"><img class="thumbnail" src="${newImage}"></img></a>
        <h2>${newTitle}</h2>
        <h3>${newAuthor}</h3>
        <h4>${newGenre}</h4>
        <h5>${newPages} pages</h5>
        </div>
        `);
    }
  };
});
