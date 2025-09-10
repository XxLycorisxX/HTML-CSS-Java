books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    isRussianAuthor: true,
    isModernLiterature: false,
    genre: 1,
    year: "1863 - 1869",
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 4 },
      { userId: 3, rating: 4 },
      { userId: 4, rating: 5 },
    ],
  },
  {
    title: "Ночной дозор",
    author: "Сергей Лукьяненко",
    isRussianAuthor: true,
    isModernLiterature: true,
    genre: 3,
    year: "1998",
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 },
    ],
  },
  {
    title: "Гарри Поттер",
    author: "Дж. К. Роулинг",
    isRussianAuthor: false,
    isModernLiterature: true,
    genre: 3,
    year: "1997 - 2007",
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 4 },
      { userId: 4, rating: 4 },
      { userId: 5, rating: 5 },
      { userId: 6, rating: 5 },
      { userId: 7, rating: 5 },
    ],
  },
  {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    isRussianAuthor: false,
    isModernLiterature: false,
    genre: 2,
    year: "1887",
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 },
    ],
  },
  {
    title: "Девушка в поезде",
    author: "Пола Хокинс",
    isRussianAuthor: true,
    isModernLiterature: true,
    genre: 2,
    year: "2015",
    ratings: [
      { userId: 1, rating: 4 },
      { userId: 2, rating: 5 },
      { userId: 3, rating: 3 },
      { userId: 4, rating: 5 },
      { userId: 5, rating: 2 },
    ],
  },
];

let book = Number(prompt("Введите номер книги"));
function getBookInfo() {
  return `Название: ${books[book].title}, Автор: ${books[book].author}, Год: ${books[book].year}`;
}
console.log(getBookInfo());

function addRating(book, userId, rating) {
  book.ratings.push({ userId, rating });
  console.log(book.ratings);
}
addRating(books[0], 5, 3);

function getAverageRating(book) {
  let sum = 0;
  for (let i = 0; i < book.ratings.length; i++) {
    sum += book.ratings[i].rating;
  }
  sum = sum / book.ratings.length;
  console.log(sum);
}
getAverageRating(books[0]);

function yourBook(books) {
  let ur_genre;
  do {
    ur_genre = Number(
      prompt("Какой жанр предпочитаете? 1 - Роман, 2 - Детектив, 3 -  Фентези")
    );
  } while (ur_genre !== 1 && ur_genre !== 2 && ur_genre !== 3);

  const isModernLiterature = confirm("Предпочитаете современную литературу?");
  const isRussianAuthor = confirm("Хотели бы книгу русского автора?");
  const urBook = books.filter(
    (book) =>
      ur_genre === book.genre &&
      isModernLiterature === book.isModernLiterature &&
      isRussianAuthor === book.isRussianAuthor
  );
  if (urBook.length === 0) {
    console.log("К сожалению, не смогли подобрать вам книгу");
  } else {
    console.log(`Предлагаем вам почитать - ${urBook[0]["title"]}`);
  }
}
yourBook(books);
