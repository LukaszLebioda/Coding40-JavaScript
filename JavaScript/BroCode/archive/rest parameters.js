// rest parameters - packs arguments into an array, so we can create a function with indefinite number of arguments

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

// this below isn't too practical:

// console.log(sum(a, b, c, d));

// function sum1(a, b) {
//     return a + b
// }
// function sum2(a, b, c) {
//     return a + b + c
// }
// function sum3(a, b, c) {
//     return a + b + c
// }

//so we create a function like this:
console.log(sum(a, b, c, d, e));

function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total = total + number
    }
    return total
}