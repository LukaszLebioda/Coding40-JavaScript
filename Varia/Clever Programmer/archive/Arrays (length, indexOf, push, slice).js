const groceries = ["banana", "apple", "tomato", "🍐" ]

groceries.push("🍪");
groceries.push("🍇");
groceries.push("🍍");
groceries.push("raspberry", "blueberry")

console.log(groceries); 

// cuts out a portion of an array (including 0, not-including 2)
console.log(groceries.slice(1, 4));

console.log(groceries.length);
console.log(groceries.indexOf("tomato"));
console.log(groceries.length);


