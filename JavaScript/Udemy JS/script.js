// pobieranie elementów na stronie

console.log("---------stare sposoby------------");

// stare sposoby:
const test = document.getElementById("item");
console.log(test);

const test2 = document.getElementsByTagName("h1");
console.log(test2);

const test3 = document.getElementsByClassName("listItem");
console.log(test3);

console.log("-------nowe sposoby--------------");

// nowe sposoby:

// znajduje pierwszy element li na stronie
const test4 = document.querySelector("ul"); 
console.log(test4);
// znajduje pierwszy element o id item na stronie (używamy # albo . )
// jako argument podajemy zapisy jak w css
const test5 = document.querySelector("#item"); 
console.log(test5);
// można szukać w zmiennych
const ulList = document.querySelector("ul");
const liItem = ulList.querySelector("li");
console.log(liItem);

// znajduje wszystkie elementy
const test6 = document.querySelectorAll("h1"); // ("h1.class") or (".class")
console.log(test6);

console.log("-------żywe kolekcje---------");

// żywe kolekcje
const newLi = document.createElement("li");
ulList.appendChild(newLi).textContent = "qwerty";
console.log(ulList.length);

