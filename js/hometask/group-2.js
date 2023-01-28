// ************************************ 01 ************************************

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

const genres = ['Jazz', 'Blues', 'Rock n Roll', 'Reggae', 'Rap'];

function logItems(array) {}

// -----------------------------------------------------------------------------

// ************************************ 02 ************************************

//Напишіть функцію findSmallerNumber(numbers) яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {}

// -----------------------------------------------------------------------------

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {
//   const min = numbers.reduce((acc, num) => {
//     if (num < acc) {
//       acc = num;
//     }
//     return acc;
//   });
//   console.log(min);
// }

// function findSmallerNumber(numbers) {
//   Array.isArray(numbers)
//     ? console.log(Math.min(...numbers))
//     : console.log('No array found');
// }

// findSmallerNumber(numbers);

// ************************************ 03 ************************************

// У нас є масив фільмів. Фільмів всього 7, а унікальних режисерів 3.
// Тому нам потрібно перетворити цей масив на об'єкт ключами якого будуть режисери,
// а їх властивостями - масиви фільмів.E.g.
// { 'Christopher Nolan': ['Interstellar', 'Inception', 'The Dark Knight'] }

const movies = [
  { director: 'Christopher Nolan', title: 'Interstellar' },
  { director: 'Quentin Tarantino', title: 'Pulp Fiction' },
  { director: 'Christopher Nolan', title: 'Inception' },
  { director: 'Christopher Nolan', title: 'The Dark Knight' },
  { director: 'Martin Scorsese', title: 'Taxi driver' },
  { director: 'Quentin Tarantino', title: 'Inglorious Basterds' },
  { director: 'Martin Scorsese', title: 'Silence' },
];

// -----------------------------------------------------------------------------

// const collection = movies.reduce((acc, { director, title }) => {
//   if (!acc[director]) {
//     acc[director] = [];
//   }
//   acc[director].push(title);
//   return acc;
// }, {});
// console.table(collection);

// ************************************ 04 ************************************

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат
// const calculator = {};

// -----------------------------------------------------------------------------

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     const { a, b } = this;
//     console.log('a + b =', a + b);
//   },
//   mult() {
//     console.log('a * b =', this.a * this.b);
//   },
// };

// calculator.read(5, 12);
// calculator.sum();
// calculator.mult();
// console.table(calculator);
