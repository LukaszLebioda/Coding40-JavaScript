// ważna jest kolejność
// najpierw pobieramy elementy
// potem tworzymy funkcje (najlepiej nie-anonimowe)
// na końcu podajemy addEventListenery;


// addEventListener

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

// funkcja anonimowa zwykła
btn1.addEventListener("click", function() {
    console.log("I was clicked!");
})

// funkcja anonimowa strzałkowa
btn2.addEventListener("mouseover", () => console.log("I was hovered!"));

// callback strzałkowy
const test = () => console.log("I was double-clicked!");
btn3.addEventListener("dblclick", test)

// callback zwykły
// function test() {
//     console.log("dfghdfg");
// }
// btn3.addEventListener("dblclick",test)