// funkcja podlega hoistingowi (pomimo że najpierw piszemy funkcję, a potem ją wywołujemy, wywołanie fukncji jest hoistingowane na samą górę kodu)
// deklaracja funkcji (hoisting)

test()
 
 function test() {
    console.log("cześć");
 }

 // wyrażenie funkcyjne (sposób na obejście hoistingu):

 const helloWorld = function() {
    console.log("Hello World!");
 }
 helloWorld()

 // najlepiej jednak używać funkcji strzałkowej:
 const newArrow = () => {
    console.log("Bzzzzzzzzzzzz.......");
 }
newArrow()

// funkcja z parametrami (jakby zmiennymi dla funkcji, które określamy podczas deklaracji funkcji) / argumentami (jakby wartościami tych zmiennych, które podajemy podczas wywoływania funkcji):
function add(parametr) {
    console.log("Podany argument to: " + parametr);
}
add()
add(123)
add("Pan Samochodzik")

// funkcja z dwoma parametrami (i więcej):
function newNumbers(x, y, z) {
console.log(x);
console.log((x + y) * z);
}
newNumbers()
newNumbers(5, 10, 2)

console.log("-------------------");

// ale jako użytkownicy strony www nie siedzimy przecież w devtoolsach, dlatego normalnie nie używamy console.loga, tylko returna (return zwraca wartość, którą możemy w przyszłości wykorzystać);
function newNumbers2(x, y) {
    return x + y
}
newNumbers2(5, 10)
console.log((newNumbers2(2,10)))

// return kończy działanie funkcji:
function newNumbers2(x, y) {
    return x + y
    console.log("tego tekstu nie będzie, bo jest po returnie");
}

function add2(x,y) {
    if (x < y) return // można zapisać {return}
    console.log(x + y)
}
add2(10,20) // true - nic się nie dzieje, return kończy funkcję
add2(20,10) // false - drukuje w konsoli wynik 

function homework(name,age) {
    console.log(`Cześć, mam na imię ${name} i mam ${age} lat`)
}
homework("Łukasz", 40)
