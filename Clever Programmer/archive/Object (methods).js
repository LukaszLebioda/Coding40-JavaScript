
const person = {
    name: "Chyżwar",
    class: "god",
    age: 1000000,
    strength: "powerful",
    specialAbilities: "can travel in time",
    material: "iron-like",
    heigth: 3 ,
    symbol: "🍏",
    assets: 1000,
    debts: 600,
    moneyTotal: function() {
        return this.assets - this.debts 
        }
}

const intro = `Hello, I'am ${person.name} and I'am ${person.age} years old. I have ${person.moneyTotal()} dollars on my account.`
console.log(intro);