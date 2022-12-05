// 2D arrays, multi-dimentional arrays - an arrays of arrays
let fruits = ["apples", "oranges", "bananas"]
let vegetables = ["carrots", "onions", "potatoes"]
let meats = ["eggs", "chicken", "fish"]

let groceryList = [fruits, vegetables, meats]
console.log(groceryList);

// nested loops to iterate through every element of every array

for(const array of groceryList) {
    
    for(const element of array) {
        console.log(element);
    }

}

//to acces an element of 2d array we use 2 indexes:
let element = groceryList[0][1]
console.log(element);

groceryList[2][0] = "poultry"
console.log(meats);