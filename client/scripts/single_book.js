$(document).ready(function() {
    var whatBook = window.location.search.split('=')[1];
    $.get('https://tdb-library.herokuapp.com/book/' + whatBook, getThatBook, 'json');

    function getThatBook(data) {
        $('.single_book').html('');
        $('.single_book').append(
            `
        <div class="a_book">
        <img class="thumbnail" src="${data[0].image_url}"></img>
        <h2>${data[0].title}</h2>
        <h3>${data[0].author}</h3>
        <h4>${data[0].genre}</h4>
        <h5>${data[0].page_count} pages</h5>
        </div>
        `
        );
        $('.hidden_form').append(
            `
      <div class="input-field col s6">
        <input id="book_title" type="text" class="validate" value="${data[0].title}">
        </div>
        <div class="input-field col s6">
        <input id="book_author" type="text" class="validate" value="${data[0].author}">
      </div>
      <div class="input-field col s6">
        <input id="book_genre" type="text" class="validate" value="${data[0].genre}">
      </div>
      <div class="input-field col s6">
        <input id="book_pages" type="text" class="validate" value="${data[0].page_count}">
      </div>
      <div class="input-field col s6">
        <input id="cover_art" type="text" class="validate"value="${data[0].image_url}">
      </div>
      <div class="crud-buttons">
      <button class="btn green waves-effect waves-light" id="update-book"type="submit">Submit</button>
      </div>
      `
        );
        $('#update-book').click(function(e) {
            e.preventDefault();
            let newBook = {};
            newBook.title = $('#book_title').val();
            newBook.author = $('#book_author').val();
            newBook.genre = $('#book_genre').val();
            newBook.page_count = $('#book_pages').val();
            newBook.image_url = $('#cover_art').val();
            console.log(newBook);
            $.ajax({
                url: 'https://tdb-library.herokuapp.com/book/' + whatBook,
                type: 'PUT',
                data: newBook,
                success: function(result) {
                    alert("Book successfully updated");
                    window.location = '/books.html'
                }
            })
        });
    }
    $('#delete-button').click(function() {
        var userAnswer = confirm("This will REMOVE THE BOOK from the database!! are you sure?!");
        if (userAnswer == true) {
            $.ajax({
                url: 'https://tdb-library.herokuapp.com/book/' + whatBook,
                type: 'DELETE',
                success: function(result) {
                    console.log(result);
                    alert("Book successfully deleted");
                    window.location = '/books.html'
                }
            });
        }
    });

    $('#update-button').click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, "slow");
        $('.hidden_form').fadeIn(1600);
    });




});
