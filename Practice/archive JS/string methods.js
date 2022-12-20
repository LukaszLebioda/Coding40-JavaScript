// charAt
// includes
// indexOf
// lastIndexOf
// replace
// replaceAll
// slice x2
// split
// toLowerCase
// toUpperCase
// trim

// toUppercase(); toLowercase()
let name = "anastazja";
console.log(name.toUpperCase()); // expected output: ANASTAZJA

let name2 = "BOROMIR";
name2 = name2.toLowerCase();
console.log(name2); // expected output: boromir

console.log("-----------");

// ----------------------------------------------------------------------

// slice() do ucinania wg Udemy; 
let username = "maciej";
newUsername = username.charAt(0).toUpperCase()
console.log(newUsername);

newUsername2 = username.slice(1);
console.log(newUsername2);

newUsername = username.charAt(0).toUpperCase() + username.slice(1);
console.log(newUsername);

// // slice() do ucinania wg Bro Code;
let fullName = "Łukasz Lebioda";
console.log(fullName);
let firstName;
let lastName;
// firstName = fullName.slice(0, 6);
// console.log(firstName);
// lastName = fullName.slice(7);
// console.log(lastName);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
lastName = fullName.slice(fullName.indexOf(" ") +1);
console.log(lastName);

// ----------------------------------------------------------------------

console.log("-----------");

// includes();
const text1 = 'sprawdź, czy zawieram słowo "czy"'
console.log(text1.includes("czy")); // returns boolean value

console.log("--------");

// ----------------------------------------------------------------------

// replace(), replaceAll()
const text2 = 'pies zamień każde słowo pies, na słowo kot pies'
console.log(text2.replaceAll("pies", "kot"));

let phoneNumber = "513/637/367"
phoneNumber = phoneNumber.replaceAll("/", "-");
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

console.log("--------");

// ----------------------------------------------------------------------

// split();
const text3 = 'podziel, ten, string, od, przecinków'
console.log(text3.split(","))

console.log("----------");

// ----------------------------------------------------------------------

// charAt (sprawdza, jaki znak znajduje się pod danym indeksem)
let letter = "Lord of the Rings";
let firstLetter = letter.charAt(0);
console.log(firstLetter);
console.log(letter.charAt(1));

// ----------------------------------------------------------------------

// indexOf (sprawdza, jaki index ma pierwszy dany znak w stringu)
let letter2 = "Gerlachachachach";
console.log(letter2.indexOf("h"));

// lastIndexOf (sprawdza, jaki index ma ostatni dany cnak w stringu)
console.log(letter2.lastIndexOf("h"));

// ----------------------------------------------------------------------

// trim - ucina spacje na początku i na końcu stringa
letter3 = "   dfgdg fgdg  ";
letter4 = letter3.trim();
console.log(letter4);





