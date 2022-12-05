// // array.map() - executes a provided callback function once for each array element and creates a new array

// let numbers = [5, 10, 15, 20, 25];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// // my way:
// // function square(x) {
// //     let result = x * x;
// //     return result
// // }

// // Bro Code's way:
// function square(x) {
//     return Math.pow(x, 2);
// }

// function cube(x) {
//     return Math.pow(x, 3);
// }

// // my way of displaying result:
// // console.log(squares)

// // Bro Code's way:
// function print(x) {
//     console.log(x);
// }
// squares.forEach(print);
// cubes.forEach(print);

// ------------------------------------------------------

// array.filter() - creates a neww array with all elements that went through a filter

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);
console.log(adults);
adults.forEach(print)

function checkAge(element) {
    return element >= 18
}

function print(element) {
    console.log(element);
}



