// // ważna jest kolejność
// // najpierw pobieramy elementy do zmiennych
// // potem tworzymy funkcje (najlepiej strzałkowe i nie-anonimowe)
// // na końcu podajemy addEventListenery;

// // addEventListener

// const btn1 = document.querySelector("#button1");
// const btn2 = document.querySelector("#button2");
// const btn3 = document.querySelector("#button3");
// const btn4 = document.querySelector("#button4");

// // button1 - funkcja zwykła anonimowa
// btn1.addEventListener("click", function() {
//     console.log("Kliknięto mnie!");
// })

// // button2 - funkcja strrzałkowa anonimowa
// btn2.addEventListener("mouseover", () => {
//     console.log("Najechano na mnie!");
// })

// // button3 - funkcja strrzałkowa anonimowa - zapis uproszczony
// btn3.addEventListener("dblclick", () => console.log("Dwukrotnie mnie kliknięto!")) 

// // button4 - funkcja z callbackiem
// const testClick = () => console.log("Znowu mnie kliknięto!");
// btn4.addEventListener("click", testClick) 

// ----------------------------------------------------------------------------

// można też pobrać naraz wszystkie przyciski (tworzymy obiekt tablico-podobny):

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");

const btns = document.querySelectorAll(".buttons");
const smile = () => console.log("😄");

// nie da się: btns.addEventListener...
// ale da się z forEach (lub z map albo nawet zwykłym for...of):
btns.forEach(btn => btn.addEventListener("click", smile))






