// slice - niedestrukcyjna, wycina od do
const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0,2)
console.log(numbers2);
console.log(numbers);

const numbers3 = numbers.slice(-3)
console.log(numbers3);
console.log(numbers);

// splice - destrukcyjna, wycina od, ile wycina, co wkładamy w miejsce elementu wyciętego

const randomStuff = colors.splice(3) // albo colors.splice(-2)
console.log(randomStuff)
console.log(colors)

newCars = cars.splice(2,4, "test")
console.log(newCars)
console.log(cars);





// const newCars = cars.splice(2,4,"kolololo")
// console.log(newCars);
// console.log(cars);
