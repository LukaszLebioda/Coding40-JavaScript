
// // operator rest, czyli operator spread, ale w innej roli - używany nie na tablicach, ale na funkcjach
// // jako spread:
// const cities = ["Berlin", "Warszawa", "Pekin"]
// console.log(cities);
// console.log(...cities);

// // jako rest - w tym przykładzie loguje nam tylko 3 pierwsze argumenty:
// const numbers = (x, y, z) => {
//     console.log(x, y, z);
// }
// numbers(2, 4, 6, 100, 200, 300)

// a w tym przykładzie loguje nam 2 pierwsze argumenty, a resztę argumentów loguje jako tablicę upakowaną w parametrze "z":
const numbers2 = (x, y, ...z) => {
    console.log(x, y, z);
    console.log(z);
    console.log(z.map(el => el * 2));
}
numbers2(2, 4, 6, 100, 200, 300)

