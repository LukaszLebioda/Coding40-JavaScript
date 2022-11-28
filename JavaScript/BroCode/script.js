// // array.reduce() - reduces an array to a single valu (e.g. sums up all the elements - like in the online store where items being purchased are summed up in the cart)

// let prices = [5, 10, 12, 19, 28, 30, 100];
// let total = prices.reduce(checkOut);

// console.log(total);

// function checkOut(total, item) {
//     return total + item
// }
// NUMBER CONSTRUCTOR / STRING CONSTRUCTOR / BOOLEAN CONSTRUCTOR
let age = window.prompt("How old are You?");
age += 1
console.log(age);
// expected ouptut, e.g. 401
let age2 = window.prompt("How old are You???");
age2 = Number(age2)
age2 += 1
console.log(age2);
// expected output: eg. 41
let y = String(3.14)
console.log(y, typeof y); 
// expected output: 3.14 string
let z;
z = Boolean("dsfsfgfg");
console.log(z, typeof z);
