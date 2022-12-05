// spread operator - upacks an array or a string into individual elements;

let numbers = [1, 45, 678, 34, 12, 9]
console.log(...numbers);

let text = "Hopefully";
console.log(...text);

// when we want to find the maximum value of an array:
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // OK!

console.log("-------------------");

// when we want to merge two arrays:
let class1 = ["Colin", "Carlos", "Tommi"];
let class2 = ["Richard", "Petter", "Sebastien"];
let class3 = [...class1, ...class2];
console.log(class3);
console.log(...class3);

console.log("--------------------");

// if we push an array into another one, we just add that pushed array as an element, wich we don't want:
class1.push(class2);
console.log(class1);
// so we can do this:
class1.push(...class2);
console.log(class1);


