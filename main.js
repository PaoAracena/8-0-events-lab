// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const primaryColor = document.querySelector('#current-color')
const colors = document.querySelectorAll(".color");

for (const color of colors) {
  color.addEventListener('click', (handleClick) => {
    primaryColor.style.background = handleClick.target.style.background;
  })
}

 const cells = document.querySelectorAll('.cell');

 for (const cell of cells)  {
 cell.addEventListener('click', (handleClick) => {
  cell.style.background = primaryColor.style.background;
 })
}