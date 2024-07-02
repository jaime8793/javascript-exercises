const getTheTitles = function (bookArray) {
  const books = [
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ];
  const newArr = bookArray.map((book, index) => {
    return book.title;
    // console.log(book.title);
  });
  //console.log(newArr);

  // console.log(books[1].title);
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
