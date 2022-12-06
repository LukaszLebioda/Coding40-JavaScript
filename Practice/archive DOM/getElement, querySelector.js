// document.getElementById - wyszukuje w dokumencie element o unikalnym id
const test = document.getElementById("item");
console.log(test);

// document.getElementsByTagName - wyszukuje w dokumencie elementy o określonym tagu
const test2 = document.getElementsByTagName("li");
console.log(test2);
// expected output: HTMLCollection(4) [li#listItem1, li.listItem, li.listItem,li.listItem]

// document.getElementsByClassName - wyszukuje elementy o okreslonej klasie
const test3 = document.getElementsByClassName("listItem");
console.log(test3);

// document.querySelector("") - znajduje pierwszy element na stronie
// document.querySelectorAll("") - znajduje wszystkie elementy na stronie
// jest uniwersalny: parametrem może być tag, id, klasa
// co zapisujemy jak w css: ("li") lub ("ul li"), ("#item"), (".listItem") ("h1"), ("h1.class") albo (".class") 
const test4 = document.querySelector("li"); 
console.log(test4);

// można też szukać tak:
const ulList = document.querySelector("ul");
console.log(ulList);
// expected output: <ul>...</ul>, a następnie:
const liItem = ulList.querySelector("li");
console.log(liItem);
// expected output: <li id="listItem1">...</li>












