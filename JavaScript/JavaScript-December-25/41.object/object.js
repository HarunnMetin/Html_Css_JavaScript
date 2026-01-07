const library = {
  name: "City Library",
  books: [
    { title: "1984", author: "Orwell", pages: 328, borrowed: false },
    { title: "Dune", author: "Herbert", pages: 412, borrowed: true },
    { title: "Sapiens", author: "Harari", pages: 498, borrowed: false },
  ],
  stats: {
    totalBorrows: 0,
  },
  borrowBook(title) {
    // bu method içinde this kullanacaksın
  },
};

//Yazar isimlerine göre kitap sayısını çıkar

let bookCount = library.books.reduce((acc, book) => {
  if (acc[book.author]) {
    acc[book.author]++;
  } else {
    acc[book.author] = 1;
  }
  return acc;
}, {});

console.log("Kitap sayisi : ",bookCount );

