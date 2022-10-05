// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // dodaje elementy na początek tablicy
// // shift i unshift rzadko używamy, bo zmieniają indeksację całej tablicy
// numbers.unshift(-9, 101);
// console.log(numbers);

// // usuwa element z indeksem 0 (czyli pierwszy w tablicy)
// numbers.shift();
// console.log(numbers);

// // dodaje elementy na końcu tablicy (często się używa)
// numbers.push("abc", 678, 3,14);
// console.log(numbers);

// // usuwa ostatni element tablicy
// numbers.pop();
// console.log(numbers);

// funkcja map (ważna w react.js)
const numbers = [1, 2, 3, 4, 5]

function multiply(x) {
    return x * 2
}

const newNumbers = numbers.map(multiply)
console.log(numbers);
console.log(newNumbers);

