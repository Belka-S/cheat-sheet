// # Module 1. Lesson 2. Branching. Cycles

// ## ******************** Example 1 - User Input and Branching ********************

// Using the if..else and prompt constructs, write code that will ask:
// `"What is the official name of JavaScript?"`. If the user enters
// `ECMAScript`, then show an alert with the string `"Correct!"`, otherwise -
// `"Do not know? ECMAScript!"`

// -----------------------------------------------------------------------------

// ## ******************** Example 2 - Time display (if...else) ********************

// Write a script to display hours and minutes in the browser console as a string
// format `"14 hours 26 minutes."`. If the value of the `minutes` variable is `0`, then
// output the string `"14 o'clock"`, without minutes.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} min.`;
// } else {
//   timestring = `${hours} h.`;
// }
// console.log(timestring);

// -----------------------------------------------------------------------------

// ## ******************** Example 3 - Branching ********************

// Write a script that prints the string `"This is a positive number"` to the console,
// if the user entered a number greater than zero in the prompt. If zero was entered, output
// to the console the string `"This is zero"`. If a negative number is passed, in the console
// should be the string `"This is a negative number"`.

// const userInput = prompt('Enter the number');

// -----------------------------------------------------------------------------

// ## ******************** Example 4 - Nested branches ********************

// Write a script that compares the numbers in variables `a` and `b`. If both
// values greater than `100`, then print the maximum of them to the console. Otherwise,
// the console should show the sum of the value `b` and the number 512.

// const a = 120;
// const b = 180;

// -----------------------------------------------------------------------------

// ## ******************** Example 5 - Link Formatting (endsWith) ********************

// Write a script that checks if the value of the `link` variable ends
// symbol `/`. if not, add this character to the end of the `link` value. Use
// `if...else` construction.

// let link = 'https://my-site.com/about';
// // Write code below this line
// // Write code above this line
// console.log(link);

// -----------------------------------------------------------------------------

// ## ******************** Example 6 - Link formatting (includes and logical "AND") ********************

// Write a script that checks if the value of the `link` variable ends by
// symbol `/`. If not, append this character to the end of the `link` value, but only
// if `link` contains the substring `"my-site"`. Use construction `if...else`.

// let link = 'https://somesite.com/about';
// // Write code below this line
// // Write code above this line
// console.log(link);

// -----------------------------------------------------------------------------

// ## ******************** Example 7 - Link formatting (ternary operator) ********************

// Make code  refactoring of the  task number 4 code using ternary operator.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// -----------------------------------------------------------------------------

// ## ******************** Example 8 - if...else and logical operators ********************

// Write a script that will output a string to the browser console depending on
// `hours` variable values.
// If the value of the variable `hours`:
// - less than `17`, output the string `"Pending"`
// - greater than or equal to `17` and less than or equal to 24, output the string `"Expires"`
// - greater than `24` , output the string `"Overdue"`

// const hours = 10;

// -----------------------------------------------------------------------------

// ## ******************** Example 9 - Project submission deadline (if...else) ********************

// Write a script to display the project deadline time. Use
// `if...else` construction.
// - If there are 0 days before the deadline - output the string `"Today"`
// - If it's 1 day before the deadline - output the string `"Tomorrow"`
// - If it's 2 days before the deadline - output the string `"The day after tomorrow"`
// - If it's 3+ days before the deadline - print the string `"Date in the future"`

// const daysUntilDeadline = 5;

// -----------------------------------------------------------------------------

// ## ******************** Example 10 - Project submission deadline (switch) ********************

// Make the code refactor of the task number 5 code using `switch`.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('The day after tomorrow');
// } else {
//   console.log('Date in the future');
// }

// -----------------------------------------------------------------------------

// ## ******************** Example 11 - The for loop ********************

// Write a for loop that prints numbers in ascending order to the browser console from `min`
// to `max`, but only if the number is a multiple of `5`.

// const max = 100;
// const min = 20;

// -----------------------------------------------------------------------------

// ## ******************** Example 12 - User Input and Branching ********************

// Write a script that will ask for login using `prompt` and log
// result in browser console.
// - If the visitor enters `"Admin"`, then `prompt` prompts for a password
// - If nothing is entered or the Esc key is pressed - print the line `"Canceled"`
// - Otherwise print the string `"I don't know you"`
// Check password like this:
// - If the password is `"I'm an admin"`, then output the string `"Hello!"`
// - Else output the string `"Wrong password"`

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
//

// // # Модуль 1. Заняття 2. Розгалуження. Цикли
// console.log('Lesson 2')

// // ## Example 1 - Введення користувача та розгалуження

// // Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// // `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
// // `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// // `"Не знаєте? ECMAScript!"`

// // const answer = prompt("Яка офіційна назва JavaScript?");

// // if (answer === "ECMAScript") {
// //   alert('Правильно')
// // } else {
// //   alert('Не знаєте? ECMAScript!')
// // }

// // ## Example 2 - Відображення часу (if...else)

// // Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// // формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// // виводь рядок `"14 г."`, без хвилин.

// // ```js
// const hours = 14;
// const minutes = 0;

// //1
// // let result = `${hours} г.`;

// // if (minutes !== 0) {
// //   result += ` ${minutes} хв.`
// // }

// //2
// // let result;

// // if (minutes === 0) {
// //   result = `${hours} г.`
// // } else {
// //   result = `${hours} г. ${minutes} хв.`
// // }

// // console.log(result)
// // ```

// // ## Example 3 - Розгалуження

// // Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// // якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// // в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// // повинен бути рядок `"Це негативне число"`.

// // ```js
// // const userInput = Number(prompt('Введіть число'));

// // if (userInput === 0) {
// //   alert("Це нуль")
// // } else if (userInput > 0) {
// //   alert("Це позитивне число")
// // } else if (userInput < 0) {
// //   alert("Це негативне число")
// // } else {
// //   alert("ви щось не те ввели")
// // }

// // ```

// // ## Example 4 - Вкладені розгалуження

// // Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// // значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// // випадку у консолі повинна бути сума значення `b` та числа 512.

// // ```js
// // const a = 120;
// // const b = 10;

// // if(a > 100 && b > 100) {
// //   if (a >= b) {
// //     console.log(a)
// //   } else {
// //     console.log(b)
// //   }
// // } else {
// //   console.log(b+512)
// // }

// // ```

// // ## Example 5 - Форматування посилання (endsWith)

// // Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// // символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// // конструкцію `if...else`.

// // ```js
// // let link = 'https://my-site.com/about';

// // if (!link.endsWith('/')) {
// //   link += '/';
// // }
// // console.log(link);

// // ```

// // ## Example 6 - Форматування посилання (includes та логічне «І»)

// // Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// // символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// // тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
// // `if...else`.

// // ```js
// // let link = 'https://my-site.com/about/';

// // if (!link.endsWith('/') && link.includes('my-site')) {
// //   link += '/';
// // }

// // console.log(link);
// // ```

// // ## Example 7 - Форматування посилання (тернарний оператор)

// // Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// // ```js
// // let link = 'https://mys-site.com/about';
// // link.includes('my-site') && !link.endsWith('/') ? link += '/' : link += '?';
// // console.log(link);
// // ```

// // ## Example 8 - if...else та логічні оператори

// // Напиши скрипт який виводитиме в консоль браузера рядок залежно від
// // значення змінної `hours`.

// // Якщо значення змінної `hours`:

// // - менше `17`, виводь рядок `"Pending"`
// // - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// // - більше `24` , виводь рядок `"Overdue"`

// // ```js
// // const totalHours = 25;

// // if (totalHours < 17) {
// //   console.log("Pending")
// // } else if (totalHours >= 17 && totalHours <= 24) {
// //   console.log("Expires")
// // } else {
// //   console.log("Overdue")
// // }
// // ```

// // ## Example 9 - Дедлайн здачі проекту (if...else)

// // Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// // конструкцію `if...else`.

// // - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// // - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// // - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// // - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

// // ```js
// // const daysUntilDeadline = 5;

// // ```

// // ## Example 10 - Дедлайн здачі проекту (switch)

// // Виконай рефакторинг коду задачі номер 5 використовуючи `switch`.

// // ```js
// // const daysUntilDeadline = -1;

// // switch (daysUntilDeadline) {
// //   case 0: {
// //     console.log('Сьогодні');
// //     break;
// //   }

// //   case 1: {
// //     console.log('Завтра');
// //     break;
// //   }
// //   case 2: {
// //     console.log('Післязавтра');
// //     break;
// //   }

// //   default: {
// //     console.log('Дата у майбутньому');
// //   }
// // }

// // if (daysUntilDeadline === 0) {
// //   console.log('Сьогодні');
// // } else if (daysUntilDeadline === 1) {
// //   console.log('Завтра');
// // } else if (daysUntilDeadline === 2) {
// //   console.log('Післязавтра');
// // } else {
// //   console.log('Дата у майбутньому');
// // }
// // ```

// // ## Example 11 - Цикл for

// // Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
// // до `max`, але тільки якщо число кратне `5`.

// // ```js
// // const max = 89;
// // const min = 13;

// // for(let i = min; i <= max; i += 1) {
// //   if (i % 5 === 0) console.log(i)
// // }

// // ```

// // ## Example 12 - Введення користувача та розгалуження

// // Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// // результат у консоль браузера.

// // - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// // - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// // - В іншому випадку вивести рядок `"Я вас не знаю"`

// // Пароль перевіряти так:

// // - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// // - Інакше виводити рядок `"Невірний пароль"`

// // const loginName = prompt('ваш логін');

// // console.log(loginName, typeof loginName);

// // if (loginName === "Адмін") {
// //   const password = prompt('тепер введи пароль');

// //   if (password === 'Я адмін') {
// //     console.log('Здрастуйте')
// //   } else {
// //     console.log("Невірний пароль")
// //   }

// // } else if (!loginName) {
// //   console.log('Скасовано')
// // } else {
// //   console.log('Я вас не знаю')
// // }

// const loginName = null;
// // const loginName = undefined;
// // const loginName = 0;
// // const loginName = '';
// // const loginName = false;

// if (!loginName) {
//   console.log('Скасовано')
// }
