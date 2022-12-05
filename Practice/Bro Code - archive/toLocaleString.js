// toLocaleString - returns a string with a language sensitive representation of this string
// number.toLocaleString(locale, {options})
// undefinde - default set of the browser

let myNumber = 123456.789;
// myNumber = myNumber.toLocaleString("en-US");
// myNumber = myNumber.toLocaleString("de-DE");

// myNumber = myNumber.toLocaleString("en-US", {style:"currency", currency: "USD"})
// console.log(myNumber);

// myNumber = myNumber.toLocaleString("de-DE", {style:"currency", currency: "EUR"})
// console.log(myNumber);

myNumber = myNumber.toLocaleString("pl-PL", {style:"currency", currency: "PLN"})
console.log(myNumber);

// ------------------------------

let myNumber2 = 100;
// myNumber2 = myNumber2.toLocaleString(undefined, {style:"percent"});
// console.log(myNumber2);

myNumber2 = myNumber2.toLocaleString(undefined, {style:"unit", unit:"celsius"})
console.log(myNumber2);