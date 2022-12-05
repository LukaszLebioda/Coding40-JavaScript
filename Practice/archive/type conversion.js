// number constructor, string constructor, boolean constructor
let age = window.prompt("How old are You?");
age += 1
console.log("You're " + age + " old");
console.log(typeof age);

let age2 = window.prompt("How old are You???");
age2 = Number(age2)
age2 += 1
console.log("You're " + age2 + " old");
console.log(typeof age2);

let x = Number(23)
console.log(x, typeof x);

let y = String(3.14)
console.log(y, typeof y); // patrz: parseInt()

let z = Boolean("");
console.log(z, typeof z);

// parseInt()
let number = "34.54567";
number = parseInt(number);
console.log(number, typeof number); // patrz: Number()


