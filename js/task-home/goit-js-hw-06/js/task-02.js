// const ulEl = document.querySelector('ul#ingredients');
// const liArray = [];

// ingredients.forEach(ingredient => {
//   const liEl = document.createElement('li');

//   liEl.textContent = ingredient;
//   liEl.className = 'item'; //liEl.classList.add('item');

//   liArray.push(liEl);
//   console.log(liEl);
// });

// ulEl.append(...liArray);

// -------------------------------------------------------------------------------------------- //

// In HTML, there is an empty ul#ingredients list.
//In JavaScript, there is an array of strings.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Write a script that, for each element in the ingredients array:
// Will create a separate <li> element.
// Will add the ingredient name as its text content.
// Will add the 'item' class to the element.
// Then will insert all <li> to the ul#ingredients list in a single operation.

// -------------------------------------------------------------------------------------------- //
