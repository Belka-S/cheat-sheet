const ref = {
  ulEl: document.querySelector('ul#categories'),
  liEl: document.querySelectorAll('ul#categories li.item'),
  hEl: document.querySelectorAll('ul#categories h2'),
  nestedUlEl: document.querySelectorAll('ul#categories li.item ul'),
};
// Object.values(ref).forEach(el => console.log(el));

console.log(`Number of categories: ${ref.liEl.length}`);

ref.liEl.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements ${el.querySelectorAll('li').length}`);
});

console.log('********************');

// -------------------------------------------------------------------------------------------- //

// console.log(
//   'Number of categories:',
//   document.querySelector('ul#categories').childElementCount
// );

// const allCategories = document.querySelectorAll('ul#categories .item');

// allCategories.forEach(category => {
//   const categoryTitel = category.firstElementChild;
//   const categoryList = categoryTitel.nextElementSibling;

//   console.log(`Category: ${categoryTitel.textContent}`);
//   console.log(`Elements: ${categoryList.childElementCount}`);
// });

// console.log('********************');

// -------------------------------------------------------------------------------------------- //

// Write a script that:
// Will count and display in the console the number of categories in ul#categories,
// that is, li.item elements. For each li.item element in the ul#categories list,
// will find and display in the console the element header text(<h2> tag) and the
// number of elements in the category(all nested < li >).

// -------------------------------------------------------------------------------------------- //
