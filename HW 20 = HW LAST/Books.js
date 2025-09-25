'use strict'
        let books = [
            {
                title: "Война и мир",
                author: "Лев Толстой",
                isRussianAuthor: true,
                isModernLiterature: false,
                genre: 1,
                year: '1863 - 1869',
                ratings: [
                    { userId: 1, rating: 4 },
                    { userId: 2, rating: 4 },
                    { userId: 3, rating: 4 },
                    { userId: 4, rating: 5 }
                ],
            },
            {
                title: "Ночной дозор",
                author: "Сергей Лукьяненко",
                isRussianAuthor: true,
                isModernLiterature: true,
                genre: 3,
                year: '1998',
                ratings: [
                    { userId: 1, rating: 4 },
                    { userId: 2, rating: 5 },
                    { userId: 3, rating: 3 },
                    { userId: 4, rating: 5 }
                ],
            },
            {
                title: "Гарри Поттер",
                author: "Дж. К. Роулинг",
                isRussianAuthor: false,
                isModernLiterature: true,
                genre: 3,
                year: '1997 - 2007',
                ratings: [
                    { userId: 1, rating: 4 },
                    { userId: 2, rating: 5 },
                    { userId: 3, rating: 4 },
                    { userId: 4, rating: 4 },
                    { userId: 5, rating: 5 },
                    { userId: 6, rating: 5 },
                    { userId: 7, rating: 5 }
                ],
            },
            {
                title: "Шерлок Холмс",
                author: "Артур Конан Дойл",
                isRussianAuthor: false,
                isModernLiterature: false,
                genre: 2,
                year: '1887',
                ratings: [
                    { userId: 1, rating: 4 },
                    { userId: 2, rating: 5 },
                    { userId: 3, rating: 3 },
                    { userId: 4, rating: 5 }
                ],
            },
            {
                title: "Девушка в поезде",
                author: "Пола Хокинс",
                isRussianAuthor: true,
                isModernLiterature: true,
                genre: 2,
                year: '2015',
                ratings: [
                    { userId: 1, rating: 4 },
                    { userId: 2, rating: 5 },
                    { userId: 3, rating: 3 },
                    { userId: 4, rating: 5 },
                    { userId: 5, rating: 2 }
                ],
            },
        ]

        function yourBook(genre, isModernLiterature, isRussianAuthor) {
            const result = document.querySelector('#result')
            const urBook = books.filter(book => genre === book.genre && isModernLiterature === book.isModernLiterature && isRussianAuthor === book.isRussianAuthor)
            if (urBook.length === 0) {
                result.textContent = 'К сожалению, не смогли подобрать вам книгу'
            } else {
                result.textContent = `Предлагаем вам почитать - ${urBook[0]['title']}`
            }
        }
        document.querySelector('#recommendBtn').addEventListener('click', (event) => {

            const genre = Number(document.querySelector('#genre').value)
            const isModernLiterature = document.querySelector('#modern').checked
            const isRussianAuthor = document.querySelector('#russian').checked

            yourBook(genre, isModernLiterature, isRussianAuthor) 

            
        })