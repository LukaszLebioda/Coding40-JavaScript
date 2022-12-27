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

// BOOLEAN type:
let a = false;
let b = true;
console.log(a, b);

let c = Boolean(0);
let d = Boolean(1);
console.log(c, d);

let e = Boolean("");
let f = Boolean(" ");
console.log(e, f);

let g = 5 > 10;
let h = 5 < 10;
console.log(g, h);

let i;
let j = null;
let k = NaN;
console.log(Boolean(i), Boolean(j), Boolean(k));


