// console.log {} - wypisuje nazwę zmiennej wraz z jej zawartością

let zm = "Ania ma kota";
console.log(zm); 
console.log({zm}); //{zm : "Ania ma kota"}

// console.dir - wyświetla detale pobranego elementu

const paragraph = document.querySelector("#paragraph")
console.log(paragraph);
console.dir(paragraph);

// console.table - wyświetla ładnie sformatowaną tabelę

console.table([1,2,3,4,5]);

// console.group - wyświetla teksty zgrupowane w grupy

console.group("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //kończenie grupy

console.groupCollapsed("Nazwa grupy"); //grupa domyślnie zwinięta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //kończenie grupy

// console.time - sprawdza czas wykonywania się skryptu

console.time("test 1"); //rozpoczyna test - zaczyna liczyć czas
for (let i=0; i<10000; i++) {
    i * 10
}
console.timeEnd("test 1"); //kończy test

// --------------------------------------------------------------------------

// stylizacja:

// %c	Pozwala stylować tekst w konsoli
// %d lub %i	Wstawia w dane miejsce liczbę typu całkowitą
// %s	Wstawia w dane miejsce fragment tekstu
// %f	Wstawia w dane miejsce liczbę zmiennoprzecinkową
// %o	Wstawia w dane miejsce link do obiektu

console.log("Jestem zwykłym tekstem w konsoli");
console.log("%cJestem zwykłym tekstem w konsoli", "font-weight: bold; color: rebeccapurple; font-size: 30px; background: gold;");
console.log("Kot %s lubi się bawić", "Rysiek"); //Kot Rysiek lubi się bawić
console.log("Cena tego produktu to %dzł", 120); //Cena tego produktu to 120zł
console.log("%cCena tego produktu to %dzł", "color: red; font-weight: bold", 120);

// // --------------------------------------------------------------------------

// debugger

//czasami też będziemy chcieli zatrzymać na chwilę działanie skryptu w danym miejscu
function test() {
    let i = 0;
    debugger; // przerwanie działania skryptu, dzięki czemu można go dokładnie obejrzeć w zakładce SOURCES
}
test();



















