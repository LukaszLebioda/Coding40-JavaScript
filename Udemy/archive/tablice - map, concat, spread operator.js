// funkcja map (ważna w react.js)
// map jest podobne do pętli, bo wykonuje jakiś kod na każdym elemencie tablicy
// map zwraca nam nową tablicę!!!
const numbers = [1, 2, 3, 4, 5]

function multiply(x) {
    return x * 2
}

const newNumbers = numbers.map(multiply)
console.log(numbers);
console.log(newNumbers);

numbers.push(6, 7, 8)

// concat - merguje dwie tablice
const abc = ["a", "b", "c", "d"]
const newAbc = numbers.concat(abc);

console.log(newAbc);

// i na koniec tutaj tzw. spread operator, czyli 3 kropki
// ...
console.log(abc);
console.log(...abc);

const drinks = ["pepsi", "coffee", "shake"]
const meals = ["pizza", "omelett", "tomato_soup"]

const menu = [...drinks, ...meals]
console.log(menu);

// tak samo działa concat
const menu2 = meals.concat(drinks);
console.log(menu2); 