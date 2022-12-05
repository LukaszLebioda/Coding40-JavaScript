// toUppercase(); toLowercase()
let name = "anastazja";
console.log(name.toUpperCase()); // expected output: ANASTAZJA

let name2 = "BOROMIR";
name2 = name2.toLowerCase();
console.log(name2); // expected output: boromir

console.log("-----------");

// slice() + charAt()
let username = "maciej";
newUsername = username.charAt(0).toUpperCase()
console.log(newUsername);

newUsername2 = username.slice(1);
console.log(newUsername2);

newUsername = username.charAt(0).toUpperCase() + username.slice(1);
console.log(newUsername);

console.log("-----------");

// includes();
const text1 = 'sprawdź, czy zawieram słowo "czy"'
console.log(text1.includes("czy")); // returns boolean value

// replace(), replaceAll()
const text2 = 'pies zamień każde słowo pies, na słowo kot pies'
console.log(text2.replaceAll("pies", "kot"));

// split();
const text3 = 'podziel, ten, string, od, przecinków'
console.log(text3.split(","))







