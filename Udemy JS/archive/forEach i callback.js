// forEach

const numbers = [0.5, 4, "abc"]
const names = ["Lisa", "Lily", "Adam", "Przemek"]

// numbers.forEach(el => console.log(el *2))

// --------------------------------------

// callback - najpierw zapisujemy zwykłego mapa

const bigNames = names.map(name => name.toUpperCase())
console.log(bigNames);

// potem zapisujemy mapa z callbackiem
// // funkcja do callbacku - 1
function showBigNames (name) {
    console.log(name.toUpperCase());
}

// // funkcja do callbacku - zapis 2
// const showBigNames = (name) => {
//     console.log(name.toUpperCase());
// }

// teraz jeszcze raz zapisujemy forEacha i mapa, ale już z callbackiem

names.forEach(showBigNames)


// names.forEach(el => console.log(el.toUpperCase()))


