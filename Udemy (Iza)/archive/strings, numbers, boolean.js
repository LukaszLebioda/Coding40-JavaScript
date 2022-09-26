// ctrl + / daje nam komentarz
// shift + alt + strzałka w dół kopiuje linijkę
// clg = console.log(object);

// console.log("1 Witaj", namee, "You're", agee, "years old!")
// console.log("2 Witaj " + namee + " You're" + agee + "years old!")
// template string: console.log(`3 Witaj ${namee}, You're ${agee} years old!`)

// typ wartości: const text = "cokolwiek"; console.log(typeof text);
// długość stringa: const text = "cokolwiek"; console.log(text.length);
 
// wszystkie litery duże: document.write(text.toUpperCase());
// wszystkie litery małe: document.write(text.toLowerCase());

// wyświetlanie daty: const date = new Date; console.log(date);
// console.log(date.toLocaleDateString("pl"));
// console.log(date.toLocaleDateString("en"));

const smallName = "katarzyna";
const bigName = smallName.toUpperCase();
console.log(bigName);
console.log(bigName.toLowerCase());

// jak zmienić na dużą literę tylko pierwszą literę imienia:
console.log(smallName.charAt(0).toUpperCase() + smallName.slice(1));

/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/
 
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes("czy"));
console.log(text5.charAt(2));
console.log(text6.replace("pies", "kot"));
console.log(text6.replaceAll("pies", "kot"));
console.log(text7.split(","));

// jeżeli number + string to string
// jeżeli number * string to number
const num1 = 12;
const num2 = "12";
const num3 = num1 + num2;
console.log(num3);
const num4 = num1 * num2;
console.log(num4);

// Not a Number NaN
console.log(0/0);
console.log("abcd" * 12);

// zaokrąglamy (jako argument podajemy miejsce po przecinku)
const num5 = 234.67544334;
console.log(num5.toFixed(1));

// zamiana stringa na number
const num6 = "123";
console.log(parseInt(num6));

// --------------------------------------------------

// boolean
let a = true;
let b = false;
console.log(typeof b);
console.log(a);
console.log(b);

// najprostsza funkcja:
const beerAllowed = 17
if (beerAllowed >= 18) {
    console.log("true");
}
else{
    console.log("false");
}



