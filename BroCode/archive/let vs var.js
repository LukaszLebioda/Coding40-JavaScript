// variable scope - where a variable is accesible

// let - variables are limited to block scope {}, so they can't escape the curly braces, they don't exist outside curly braces

// for (let i=1; i<=3; i++) {
//     console.log(i);
// }
// // we can't acces to "i" variable outside the loop ("i is not defined"):
// console.log(i);
// // if we'd replaced let with var, it would return 4

// var - variables are limited to a function() {}
// so it can escape curly braces, but can't exist outside a function

// doSomething()

// function doSomething() {
//     for (let i=1; i<=3; i++) {
//         console.log(i);
//     }
// }
// console.log(i);

