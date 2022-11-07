
// operator rest, czyli operator spread, ale w innej roli - używany nie na tablicach, ale na funkcjach
// jako spread:
const cities = ["Berlin", "Warszawa", "Beijing"]
console.log(cities);
console.log(...cities);

// jako rest - w tym przykładzie loguje nam tylko 3 pierwsze argumenty:
const numbers = (x, y, z) => {
    console.log(x, y, z);
}
numbers(3,5,6, 456, 342, 55,98)

// a w tym przykładzie loguje nam 2 pierwsze argumenty, a resztę argumentów loguje jako tablicę:
const numbers2 = (x, y, ...z) => {
    console.log(x, y, z);
    console.log(z);
}
numbers2(3,5,6, 456, 342, 55,98)

