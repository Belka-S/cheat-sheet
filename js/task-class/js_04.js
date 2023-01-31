// # Module 2 - Lesson 4 - Functions

// ## ******************** Example 1 - Body mass index ********************
// Write a function `calcBMI(weight, height)` that calculates and returns the body mass
// index of a person. To do this, divide the weight in kilograms by
// square of a person's height in meters.
// The weight and height will be specially passed as strings. Non-integer numbers can be
// specified as `24.7` or `24.7`, i.e. a comma can be used
// as a decimal separator.
// Body mass index must be rounded to one decimal place;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// -----------------------------------------------------------------------------

// ## ******************** Example 2 - Smaller of numbers ********************

// Write a function `min(a,b)` that returns the smaller of the numbers `a` and `b`.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// -----------------------------------------------------------------------------

// ## ******************** Example 3 - Area of a rectangle ********************

// Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
// with sides, the values of which will be passed to the `dimensions` parameter as a string.
// Values are guaranteed to be separated by a space.

// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));

// -----------------------------------------------------------------------------

// ## ******************** Example 4 - Element logging ********************

// Write a function `logItems(items)` that takes an array and uses a `for` loop
// that for each element of the array will print a message to the console in
// format`<item number> - <item value>`.The numbering of elements should start with `1`.
// For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
// will print `1 - Mango` and for index 2 will print `3 - Ajax`.

// function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// -----------------------------------------------------------------------------

// ## ******************** Example 5 - Contact logging ********************

// Write a function `printContactsInfo(names, phones)` that prints  to the console the name
// and the user's phone number. The `names` and `phones` parameters will be passed
// strings of names and phone numbers separated by commas. Sequence number of names and
// phone numbers in the rows indicate a match. Number of names and phones
// guaranteed to be the same.

// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// -----------------------------------------------------------------------------

// ## ******************** Example 6 - Finding the largest element ********************

// Write a function `findLargestNumber(numbers)` that looks for the largest number in array.

// function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// -----------------------------------------------------------------------------

// ## ******************** Example 7 - Average value ********************

// Write a `calAverage()` function that takes an arbitrary number of arguments
// and returns their average. All arguments will be only numbers.

// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// -----------------------------------------------------------------------------

// ## ******************** Example 8 - Time Formatting ********************

// Write a function `formatTime(minutes)` that will translate the value of `minutes`
// (number of minutes) to a string in hour and minute format `HH:MM`.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// -----------------------------------------------------------------------------

// ## ******************** Example 9 - Collection of courses (includes, indexOf, push, etc.) ********************

// Write functions to work with the `courses` collection of training courses:
// - `addCourse(name)` - adds a course to the end of the collection
// - `removeCourse(name)` - removes a course from the collection
// - `updateCourse(oldName, newName)` - changes the name to a new one

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // ' You already have this course'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Course with this name was not found'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

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

// console.log('Lesson 4');
// // # Модуль 2. Заняття 4. Функції

// // ## Example 1 - Індекс маси тіла

// // Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// // індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// // квадрат висоти людини в метрах.

// // Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
// // `24.7` або `24,7`, тобто як роздільник дробової частини
// // може бути кома.

// // Індекс маси тіла необхідно округлити до однієї цифри після коми;

// // ```js

// /**
//  * 1. запитати користувача його зріст і вагу
//  * 2. написати функцію, яка приймає два аругменти і повертає індекс маси тіла
//  */

// const calcBMI = function(w, h) {
//   const weight = Number(w.replace(',', '.'));
//   const height = Number(h.replace(',', '.'));

//   const heightPow = Math.pow(height, 2);

//   return weight / heightPow
// }

// // const weight = prompt('введіть свою вагу в кілграмах');
// // const height = prompt('введіть свій зріст в метрах');

// // const bmi = calcBMI(weight, height);
// // console.log(bmi); // 28.8
// // ```

// // ## Example 2 - Найменше з чисел

// // Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.

// // ```js

// const min = function (a, b) {
//   return a > b ? b : a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(4, 4)); // 1
// // ```

// // ## Example 3 - Площа прямокутника

// // Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// // зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// // рядка. Значення гарантовано розділені пробілом.

// // ```js
// // console.log("square = ", getRectArea('8 11'));

// function getRectArea(dimensions) {
//   const sizesArr = dimensions.split(' ');

//   return sizesArr[0] * sizesArr[1]
// }

// // ```

// // ## Example 4 - Логування елементів

// // Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
// // `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// // форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// // починатися з `1`.

// // Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// // буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.

// // ```js
// function logItems(items) {
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`)
//   // }

//   for (let item of items) {
//     const i = items.indexOf(item)
//     console.log(`${i + 1} - ${item}`)
//   }

// }

// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['asdas', 'asdasd', 'dkjghk']);
// // logItems(['Mango', 'Poly', 'Ajax']);
// // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// // ```

// // ## Example 5 - Логування контактів

// // Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// // та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// // рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// // телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// // гарантовано однакова.

// // ```js
// function printContactsInfo(names, phones) {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   const result = [];
//   // 1
//   for (let i = 0; i < namesArray.length; i += 1) {
//     result.push(`${namesArray[i]} - ${phonesArray[i]}`)
//   }

//   // // 2
//   // for (let item of namesArray) {
//   //   const i = namesArray.indexOf(item);
//   //   console.log(`${namesArray[i]} - ${phonesArray[i]}`)
//   // }

//   return result.sort()
// }

// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // const array = printContactsInfo(
// //   'Artem,Ivan,Petro,Semen',
// //   '89001112233,890055566377,890055566300',
// // );

// // console.log(array.join(' || '))
// // ```

// // ## Example 6 - Пошук найбільшого елемента

// // Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// // масиві.

// // ```js
// function findLargestNumber(numbers) {
//   //1
//   return Math.max(...numbers)

//   //2
//   // let max = numbers[0];
//   // for (let element of numbers) {
//   //   if (element > max) {
//   //     max = element
//   //   }
//   // }

//   // return max
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// // ```

// // ## Example 7 - Середнє значення

// // Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// // і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// // ```js
// function calcAverage(...numbers) {

//   // console.log(numbers)

//   // console.log("Total arguments = ", arguments.length);

//   let sum = 0;
//   for (let arg of numbers) {
//     sum += arg
//   }

//   // return sum / arguments.length
// }

// // console.log(calcAverage(1, 2, 3, 4, 45, 12, 67)); // 2.5
// // console.log(calAverage(14, 8, 2)); // 8
// // console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// // ```

// // ## Example 8 - Форматування часу

// // Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// // (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// // ```js
// // const hours = Math.floor(totalMinutes / 60);
// // const minutes = totalMinutes % 60;
// // console.log(hours);
// // console.log(minutes);

// // const doubleDigitHours = String(hours).padStart(2, 0);
// // const doubleDigitMinutes = String(minutes).padStart(2, 0);
// // console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const mins = minutes % 60;

//   const formatedHours = String(hours).padStart(2, '0')
//   const formatedMinutes = String(mins).padStart(2, '0')

//   return `${formatedHours}:${formatedMinutes}`
// }

// const a = formatTime(1440);
// console.log(a); // "01:10"
// // console.log(formatTime(450)); // "07:30"
// // console.log(formatTime(1441)); // "24:01"
// // ```

// // ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

// // Напишіть функції для роботи з колекцією навчальних курсів `courses`:

// // - `addCourse(name)` - додає курс до кінця колекції
// // - `removeCourse(name)` - видаляє курс із колекції
// // - `updateCourse(oldName, newName)` - змінює ім'я на нове

// // ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const lastCourseIndex = courses.length - 1;
// const lastCourse = courses[lastCourseIndex];

// function A (array) {
//   console.log(array)

// }

// A([1,2,3,4])

// function addCourse(name) {
//   // if (courses.includes(name)) {
//   //   return 'Ви вже маєте такий курс'
//   // }

//   if (courses.indexOf(name) > -1) {
//     return 'Ви вже маєте такий курс'
//   }

//   courses.push(name);
//   return 'Курс додано'
// }

// function deleteCourse(name = 'deafult value') {
//   /**
//    * 1. Знайти індекс елемента. indexOF
//    * 2. Видаляємо елемент по індексу. splice
//    */

//   const index = courses.indexOf(name);
//   if (index === -1) {
//     return 'Такого курса нема'
//   }

//   const result = `Курс ${courses[index]} видалено`
//   courses.splice(index, 1);

//   return result
// }

// function updateCourse (oldName, newName) {

//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     return 'Такого курса нема'
//   }

//   const result = `Курс ${oldName} оновлено на курс ${newName}`
//   courses.splice(index, 1, newName);

//   return result
// }
// const arr = [8,9,10];
// arr.sort();
// console.log()

// let res = addCourse('Express');
// console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

// res = addCourse('Express');
// console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse('CSS'); // 'Ви вже маєте такий курс'

// res = deleteCourse();
// console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// res = updateCourse('Expressss', 'NestJS');
// console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// // ```
