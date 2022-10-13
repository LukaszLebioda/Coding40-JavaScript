
const person = {
    name: "Chyżwar",
    class: "god",
    strength: "powerful",
    specialAbilities: "can travel in time",
    material: "iron-like",
    heigth: 3 ,
    symbol: "🍏"
}
// dot notation vs. bracket notation
console.log(person);
console.log(person.strength);
console.log(person["strength"]);

// assing object
person.student = false
person.phone = "516-637-367"
person["mail"] = "lulu@lu.eu"
console.log(person.phone);
console.log(person.mail);

// function with object - my version
function sayMyName(name, age) {
    const person2 = {name: "Łukasz", age: 40}
    console.log(`Hello, I'am ${person2.name} and I'am ${person2.age} years old.`);
}
sayMyName()

// function with object - Quazi version
const sayMyName2 = (name, age) => {
    const person3 = {name: name, age: age, assets: 1000, debt: 600}
    const intro = `Hello, I'am ${person3.name} and I'am ${person3.age} years old. I have ${person3.assets - person3.debt} dollars on my account.`
    return intro
}
console.log(sayMyName2("Mike", 44))
