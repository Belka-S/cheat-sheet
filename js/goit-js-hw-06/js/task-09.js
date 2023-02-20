// const ref = {
//   bodyEl: document.querySelector('body'),
//   spanEl: document.querySelector('span.color'),
//   btnEl: document.querySelector('button.change-color'),
// };
// // Object.values(ref).forEach(el => console.log(el));
// ref.btnEl.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//   const color = getRandomHexColor();
//   ref.bodyEl.style.backgroundColor = color;
//   ref.spanEl.textContent = color;
// }

// -------------------------------------------------------------------------------------------- //

// Write a script that changes the background colors of the <body> element via inline
// style when clicking on button.change - color and outputs the color value to span.color.
// Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// -------------------------------------------------------------------------------------------- //
