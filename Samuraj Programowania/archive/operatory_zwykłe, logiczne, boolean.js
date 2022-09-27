/* const num1 = 5
const num2 = 10
const num3 = "15"

dwa == porównuje wartości, ale też je konwertuje
console.log(num1>num2);
console.log(num1==num2);
console.log(num1==num3);

trzy === porównuje i sprawdza wartości i typy, ale już bez konwersji
console.log(num1===num3); */

/* najprostsza instrukcja warunkowa świata
let test;

if (34==12) {
    test = "Działa!"
} else {
    test = "Nie działa :("
}

console.log(test);
*/

// operator potrójny jako alternatywa dla funkcji if: x ? y : v

// && operator logiczny "i"
// || operator logiczny "lub"
// ! operator zaprzeczenia (logicznej negacji), np. if(!(2---"2")){}

// sprawdzamy false czy true: Boolean(123) albo !!123;

// silnik sprawdza najpierw lewą stronę, 
// a jak jest true, to już do prawej strony nie przechodzi
// const operator1 = 20 || 10; zwróci 20

// a jak napotyka false, to sprawdza też drugą stronę
// 0 || "ghfghf"; zwróci ""ghfghf

var a = "yes"
var b = a || "no vote";
console.log(b);