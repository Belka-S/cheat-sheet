// # Module 3. Lesson 1. Objects

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## ******************** Example 1 - Object Basics ********************

// Write a script that, for the `user` object, successively:
// - adds a `mood` field with value `'happy'`
// - replaces the value `hobby` to `'skydiving'`
// - replaces `premium` to `false`
// - prints the contents of the `user` object in `key:value` format using
//   `Object.keys()` and `for...of`

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// -----------------------------------------------------------------------------

// ## ******************** Example 2 -  Object.values() method ********************

// We have an object that stores our team salaries. Write code for
// summing all salaries and store the result in the sum variable. Should
// get 390. If the `salaries` object is empty, then the result should be 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// -----------------------------------------------------------------------------

// ## ******************** Example 3 - Array of objects ********************

// Write a function `calcTotalPrice(stones, stoneName)` that takes an array
// of objects and a string with the name of the stone. The function calculates and returns the total cost
// of stones with the same name, price and quantity from the object

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 3 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 200, quantity: 2 },
// ];

// -----------------------------------------------------------------------------

// ## ******************** Example 4 - Complex tasks ********************

// Write a script for managing a personal account of an Internet bank. There is an `account` object
// in which it is necessary to implement methods for working with balance and transaction history.

// /*
//  * There are only two types of transaction.
//  * You can deposit or withdraw money from your account.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Each transaction is an object with properties: id, type and amount
//  */

// const account = {
//   // Current account balance
//   balance: 0,

//   // Transaction History
//   transactions: [],

//   /*
//    * Method creates and returns a transaction object.
//    * Accepts amount and type of transaction.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * The method responsible for adding the amount to the balance..
//    * Accepts the amount of the transaction.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history
//    */
//   deposit(amount) {},

//   /*
//    *The method responsible for withdrawing the amount from the balance.
//    * Принимает сумму танзакции.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history.
//    *
//    * If amount is greater than the current balance, display a message
//    * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//    */
//   withdraw(amount) {},

//   /*
//    * The method returns the current balance
//    */
//   getBalance() {},

//   /*
//    * The method searches and returns the transaction object by id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * The method returns the amount of funds
//    *a specific type of transaction from the entire history of transactions
//    */
//   getTransactionTotal(type) {},
// };

// -----------------------------------------------------------------------------

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
