const fruits = ["banana", "apple", "tomato", "🍐","🍪", "🍇", "🍍", "raspberry", "🍊", "blueberry"]

// console.log(fruits); 

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}


