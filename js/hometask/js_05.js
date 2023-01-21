// console.log("Модуль 3. Заняття 1. Об'єкти");

// ## ******************** Example 1 - Основи об'єктів ********************

// Напиши скрипт, який для об'єкта `user`, послідовно:
// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.table(user);

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// ##******************** Example 2 - метод Object.values() ********************

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }
// console.log('sum: ', sum);

// ##******************** Example 3 - Масив об'єктів ********************

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName)
//       return console.log(stone.price * stone.quantity);
//   }
//   console.log(`Камінь відсутній`);
// }
// calcTotalPrice(stones, 'Смарагд');

// ##******************** Example 4 - Комплексне завдання ********************

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//  * Типів транзакцій всього два. Можна покласти чи зняти гроші з рахунку.

//  * Метод, що відповідає за додавання суми до балансу. Приймає суму транзакції.
//  * Викликає createTransaction для створення об'єкта транзакції
//  * після чого додає його до історії транзакцій

//  * Метод, що відповідає за зняття суми з балансу. Приймає суму транзакції.
//  * Викликає createTransaction для створення об'єкта транзакції після чого додає
//  * його до історії транзакцій. Якщо amount більше ніж поточний баланс, виводь
//  * повідомлення про те, що зняття такої суми не можливе, недостатньо коштів.

//  * Метод шукає та повертає об'єкт транзакції по id
//  * Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій

// const account = {
//   balance: 0,
//   transactionId: 0,
//   transactionTypes: { deposit: 'deposit', withdraw: 'withdraw' },
//   transactions: [],

//   createTransaction(amount, type) {},

//   deposit(amount) {},

//   withdraw(amount) {},

//   get history() {},

//   find(id) {},

//   total(type) {},
// };

// console.table(account);
// account.deposit(100);
// account.withdraw(60);
// account.deposit(200);
// account.withdraw(80);
// account.history;
// account.find(3);
// account.find(9);
// account.total('deposit');
