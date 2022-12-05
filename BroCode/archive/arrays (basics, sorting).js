// arrays - variables to store multiple variables

let fruits = ["🍎", "🍌", "🍊"]

// console.log - whole array or a certain element
console.log(fruits);
console.log(fruits[2]);

// change element
fruits[1] = "pineapple"
console.log(fruits);

// push (adds element) & pop (removes last element)
fruits.push("🍐");
console.log(fruits);
fruits.pop()
console.log(fruits);

// unshift - puts element in front, shift - removes this element from front
fruits.unshift("pumpkin")
console.log(fruits);
fruits.shift();
console.log(fruits);

// one way to acces to length property 
console.log(fruits.length);

// another way to acces to length property 
let fruitsLength = fruits.length;
console.log(fruitsLength);

// finds index of an element
console.log(fruits.indexOf("🍎"));
let pineappleIndex = fruits.indexOf("pineapple");
console.log(pineappleIndex);

// if there is no index, the funcion returns -1
console.log(fruits.indexOf(7));

console.log("--------------------");

// arrays - strings
let myFruits = ["banana", "apple", "orange", "mango"]

for (const fruit of myFruits) {
    console.log(fruit);
}

// sort
myFruits = myFruits.sort()
console.log(myFruits);

// sort reversed
myFruits = myFruits.sort().reverse()
console.log(myFruits);
