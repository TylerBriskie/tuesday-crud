
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book; ALTER SEQUENCE book_id_seq restart with 11;')
    .then(function () {
      return Promise.all([
        knex('book').insert({id:1, title: 'The Gunslinger', author:'Stephen King', genre:'Adventure', image_url:'http://prodimage.images-bn.com/pimages/9781501141386_p0_v2_s1200x630.jpg', page_count: 224}),
        knex('book').insert({id:2, title: 'The Drawing of the Three', author:'Stephen King', genre:'Adventure', image_url:'https://images-na.ssl-images-amazon.com/images/I/51YPQ3TSBKL.jpg', page_count: 400}),
        knex('book').insert({id:3, title: 'The Waste Lands', author:'Stephen King', genre:'Adventure', image_url:'http://images.betterworldbooks.com/014/The-Wastelands-King-Stephen-9780140867176.jpg', page_count: 512}),
        knex('book').insert({id:4, title: 'Wizard And Glass', author:'Stephen King', genre:'Adventure', image_url:'https://images-na.ssl-images-amazon.com/images/I/51W57ZA014L.jpg', page_count: 787}),
        knex('book').insert({id:5, title: 'Wolves of the Calla', author:'Stephen King', genre:'Adventure', image_url:'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Wolvescalla.jpg/220px-Wolvescalla.jpg', page_count: 714}),
        knex('book').insert({id:6, title: 'Song of Susannah', author:'Stephen King', genre:'Adventure', image_url:'https://images-na.ssl-images-amazon.com/images/I/51ACJDwyIpL._SX273_BO1,204,203,200_.jpg', page_count: 432}),
        knex('book').insert({id:7, title: 'The Dark Tower', author:'Stephen King', genre:'Adventure', image_url:'https://upload.wikimedia.org/wikipedia/en/5/54/Thedarktower7.jpg', page_count: 845}),
        knex('book').insert({id:8, title: 'The Name of the Wind', author:'Patrick Rothfuss', genre:'Fantasy', image_url:'http://www.patrickrothfuss.com/images/page/cover_277.jpg', page_count: 662}),
        knex('book').insert({id:9, title: 'The Wise Man\'s Fear', author:'Patrick Rothfuss', genre:'Fantasy', image_url:'http://images.gr-assets.com/books/1452624392l/1215032.jpg', page_count: 994}),
        knex('book').insert({id:10, title: 'American Gods', author:'Neil Gaiman', genre:'Fantasy', image_url:'https://upload.wikimedia.org/wikipedia/en/4/49/American_gods.jpg', page_count: 465}),
      ]);
    });
};
