// create.Element + textContent + appendChild

// STEP1 - createElement
const list = document.createElement("ul");
const item = document.createElement("li");

// STEP2 - textContent
list.textContent = "Houses";
item.textContent = "House Stark";
console.log(list, item);

// STEP3 - appendChild
document.body.appendChild(list);
list.appendChild(item);

// nowszy i lepszy niż appendChild jest append
// w appendChild nie można: list.appendChild(item1, item2...)
// nie można też tak: list.appendChild("string");
// a w append można
const div = document.querySelector("#myDiv");

const parag = document.createElement("parag");
parag.textContent = "sdfsdf";
const heading = document.createElement("heading");
heading.textContent = "456456";

div.append(parag, heading);
div.append("cześć");
console.log(div);

// -----------------------------------------------------------

// removeChild
// const div = document.querySelector("div");
// const par = document.querySelector("p");

// div.removeChild(par);
// console.log(div);

// // remove
// div.remove();
















