// ctrl + / daje nam komentarz
// shift + alt + strzałka w dół kopiuje linijkę
// clg = console.log(object);

// trzy sposoby klejenia, ten ostatni to tzw. template string i używa znaku gravis `
// console.log("1 Witaj", namee, "You're", agee, "years old!")
// console.log("2 Witaj " + namee + " You're" + agee + "years old!")
// console.log(`3 Witaj ${namee}, You're ${agee} years old!`)

const myName = "Łukasz"
let myAge = 40

console.log(myName)
console.log(myAge)

console.log("1 Witaj", myName, "You're", myAge, "years old!")
console.log("2 Witaj " + myName + " You're" + myAge + "years old!")
console.log(`3 Witaj ${myName}, You're ${myAge} years old!`)

const text = "byleco"
console.log(typeof text)

const quote = 'I powiedział: "Veni, vidi, Deus vincit"';

console.log(quote)
// string ma tylko jedną właściwość - length
console.log(quote.length)
// ale ma wiele metod (wbudowanych funkcji)
console.log(quote.toUpperCase)



