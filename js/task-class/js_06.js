// # Module 3 Lesson 6. Destructuring and rest/spread

// ## ******************** Example 1 - Destructuring ********************

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // It was
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Is expected
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// -----------------------------------------------------------------------------

// ## ******************** Example 2 - Destructuring ********************

// Rewrite the function so that it takes one object of the parameter instead of a set
// of independent arguments.

// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // It was
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Is expected
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// -----------------------------------------------------------------------------

// ## ******************** Example 3 - Deep destructuring ********************

// Rewrite the property so that it uses one object's parameter instead of a set
// of independent arguments.

// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // It was
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Is expected
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// -----------------------------------------------------------------------------

// ## ******************** Example 4 - Destructuring ********************

// Rewrite the function so that it accepts a parameters object with properties
// `companyName` and `stock` and display a report abou the number of goods in the warehouse
// of any companies.

// function getStockReport() {

// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// -----------------------------------------------------------------------------

// ## ******************** Example 5 - operation Spread ********************

// Extend the `createContact(partialContact)` function so that it returns a new
// contact object with `id` and `createdAt` properties added, as well as `list` with
// value "default" if there is no such property in `partialContact`.

// function createContact() {

// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// -----------------------------------------------------------------------------

// ## ******************** Example 6 - Operation rest ********************

// Write a `transformUsername(user)` function to return a new object
// with `fullName` property instead of `firstName` and `lastName`.

// function transformUsername() {

// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

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

// console.log('Модуль 3 Заняття 6. Деструктуризація та rest/spread');

// ##********************Example 1 - Деструктуризація ********************

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// ##******************** Example 2 - Деструктуризація ********************

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
// function printUser(name, surname, age) {
//   console.log(`User is ${name} ${surname}, his age is ${age}`);
// }
// printUser('John', 'John', 24);
// const user = {
//   name: 'John',
//   surname: 'Smith',
// };
// printUser(user);

// ##******************** Example 3 - Глибока деструктуризація ********************

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
// function getBotReport(company) {
// const {}=company
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// const boatCompany = {
//   company: 'Cyberdyne Systems',
//   bots: {
//     repair: 150,
//     defence: 50,
//   },
// };
// console.log(getBotReport(boatCompany)); // "Cyberdyne Systems has 200 bots in stock"

// -----------------------------------------------------------------------------
// const {
//   company: companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// } = company;

// ##******************** Example 4 - Деструктуризація ********************

// Напиши функцію, що приймає об'єкт параметрів із властивостями
// `companyName` та `stock` та виводить звіт про кількість товарів на складі будь-якої
// компанії.
// function getStockReport() {}

// const company = {
//   companyName: 'Cyberdyne Systems',
//   stock: {
//     repairBots: 150,
//     defenceBots: 50,
//     defenceBots2: 50,
//     defenceBots1: 50,
//   },
// };
// getStockReport(company);
// getStockReport({
//   companyName: 'Cyberdyne Systems',
//   stock: {
//     repairBots: 150,
//     defenceBots: 50,
//   },
// }); // "Cyberdyne Systems has 200 items in stock"

// getStockReport({
//   companyName: 'Belacci',
//   stock: {
//     shoes: 20,
//     skirts: 10,
//     hats: 5,
//   },
// }); // "Belacci has 35 item in stock"

// -----------------------------------------------------------------------------
// let sum = 0;
// for (const item of Object.values(stock)) {
//   sum += item;
// }
// console.log(`${companyName} has ${sum} items in stock`);
// -----------------------------------------------------------------------------
// const sum = Object.values(stock).reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 0);
// console.log(`${companyName} has ${sum} items in stock`);

// ##******************** Example 5 - Операція spread ********************

// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.
// function createContact(partContact) {
//   return {
//     id: generateId(),
//     createdAt: Date.now(),
//     list,
//   };
// // }
// const contact = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// };
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// console.table(createContact(contact));

// -----------------------------------------------------------------------------
// function createContact(partContact) {
//   return {
//     list: 'default',
//     ...partContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }
// -----------------------------------------------------------------------------
// function createContact({ name, email, list = 'default' }) {
//   return {
//     name,
//     email,
//     list,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// ##******************** Example 6 - Операція rest ********************

// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
// `fullName`, замість `firstName` та `lastName`.
// function transformUsername() {}
// const user = {
//   id: 1,
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   email: 'j.mercer@mail.com',
//   friendCount: 40,
// };
// console.table(transformUsername(user));

// -----------------------------------------------------------------------------
// function transformUsername({ firstName, lastName, ...rest }) {
//   return { fullName: `${firstName} ${lastName}`, ...rest };
// }
