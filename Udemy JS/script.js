// funkcja anonimowa, której raczej nie powinniśmy używać

const heading = document.querySelector("h1")

heading.addEventListener("click", function() {
    console.log("Kliknięto mnie!");
})

// zamiast funkcji anonimowej postępujmy tak:
const heading2 = document.querySelector("h2")

function openNavigation() {
    console.log("Znowu mnie kliknięto!");
}
    heading2.addEventListener("click", openNavigation) // callback

// funkcja strzałkowa:
const test = (name) => {
    console.log("Mam na imię " + name);
}
test("Łukasz")

// można zapisać parametr bez nawiasów, jeśli jest jeden:
const test2 = name => {
    console.log("Mam na imię " + name);
}
test("Gosia")

// można też zapisać nawet bez {}
const test3 = name => console.log("Mam na imię", name)
test3("Jeeea")

// jeśli jest więcej argumentów, to () trzeba dać, ale {} nie trzeba:
const test4 = (name, age) => console.log(name, age)
test4("Moo", 45)

// funkcja strzałkowa z returnem:
const add = (num1, num2) => {return num1 * num2}
// można zapisać też tak (domyślnie to jest return właśnie):
const add2 = (num1, num2) => num1 + num2
// ale jak w funkcji jest więcej zadań, to już musimy dać {}:
const add3 = (num1, num2) => {
    console.log("bzzzzzz")
    return num1 - num2
}
