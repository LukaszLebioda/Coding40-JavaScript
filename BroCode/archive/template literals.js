let username = "Łukasz"
let items = 10
let total = 100

console.log("Hello", username);
console.log("You have " + items + " items");
console.log("Yout total is $", total);

// it's better to use template literals with back ticks
let text = `Hello ${username}, you have ${items} items and your total is $${total}`;
console.log(text);