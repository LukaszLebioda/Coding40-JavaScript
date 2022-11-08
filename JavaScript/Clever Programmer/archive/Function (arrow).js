// regular syntax
function sum(a, b) {
    return a + b;
} 

// Arrow function with explicit return
const sumArrow1 = (a, b) => {
    return a + b
}

// Arrow function with implicit return
const sumArrow2 = (a, b) => a + b

console.log(sumArrow2(300, 5));

// przykład z tradycyjną funkcją "sum":
function calculateFoodTotal (food, tip) {
    
    let tipPercentage = tip / 100
    let tipAmount = food * tipPercentage
    let total = sum(food, tipAmount)

    return total
}

console.log(calculateFoodTotal (200, 5))

// some practice  
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => {
    return a * b
}

console.log(add(3, 100), sub(5, 100), mul(7, 100), "YEEAH!");

const div = (a, b) => {
        if (b == 0) {
            console.log("You can not divide by ZERO!");
         } else {
            return a / b
        }
  }
  
console.log(div(40, 0));
