// array.reduce() - reduces an array to a single valu (e.g. sums up all the elements - like in the online store where items being purchased are summed up in the cart)

let prices = [5, 10, 12, 19, 28, 30, 100];
let total = prices.reduce(checkOut);

console.log(total);

function checkOut(total, item) {
    return total + item
}

