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




