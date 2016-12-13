$(document).ready(function(){

  $('#submit-book').click(function(e){
    e.preventDefault();
    let newBook = {};
    newBook.title = $('#book_title').val();
    newBook.author =$('#book_author').val();
    newBook.genre = $('#book_genre').val();
    newBook.page_count = $('#book_pages').val();
    newBook.image_url = $('#cover_art').val();
    $.post('http://localhost:3000/books/', newBook, function(result){
        console.log(result);
        window.location='/books.html'
      });
    });

});
