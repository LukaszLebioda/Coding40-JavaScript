const numbers = [1,5,13,26,48]

function multiplyBy5(x) {
    return x * 5
}

const newNumbers = numbers.map(multiplyBy5)
console.log(newNumbers);

const newNumbers2 = numbers.forEach(number => console.log(number *5))