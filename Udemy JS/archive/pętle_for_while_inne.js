// let animals = ["kojot", "likaon", "jenot", "szakal", "piesiec"]

// można tak:
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);

// ale elementów mogą być setki
// więc lepiej tak:
// for (let i = 0; i<=5; i++) {
//     console.log(animals[i]);
// }

// ale elementów może być mniej lub więcej niż 5
// a warunek mamy cały czas: i<=5
// więc najlepiej tak:

// for (let i = 0; i<animals.length; i++) {
//     console.log(animals[i]);
// }

// -------------------------

// for używamy, kiedy wiemy, jak długo ma się pętla wykonywać
// while używamy, kiedy tego nie wiemy

// let i = 0;

// while (i < 5) {
//     i++
//     console.log(i);
// }

// do ... while to pętla odwrotna do while
// let i = 0

// do {
//     i++ 
//     console.log(i)
// } while (i < 2)

// a teraz pętla "for ... of":
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// jeszcze for (lepszy do pracy z konkretnymi indeksami):
// for (let i=0; i<numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

// ale można lepiej, for ... of (do przeliterowywania):
// for (const number of numbers) {
//     console.log(number * 2);
// }



