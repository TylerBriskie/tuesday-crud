$(document).ready(function(){

  $('#submit-book').click(function(event){
    // event.preventDefault();
    let newBook = {};
    newBook.title = $('#book_title').val();
    newBook.author =$('#book_author').val();
    newBook.genre = $('#book_genre').val();
    newBook.page_count = $('#book_pages').val();
    newBook.image_url = $('#cover_art').val();
    if(newBook.title.length ===0|| newBook.author.length ===0|| newBook.genre.length===0
      || newBook.page_count.length ===0 ){
        alert("Please Enter All Fields");
      } else if (typeof Number(newBook.page_count) !== 'number'){
        alert("Make sure page count is a NUMBER");
      } else {
      $.ajax({
        url:'https://tdb-library.herokuapp.com/books/',
        type:'POST',
        data:newBook,
        success: function(result){
          alert("Book successfully added to database!");
          window.location='/books.html'
        },
        fail: function(error){
          console.log(error);
        }
      });
    }
  });

});
