const numbers = [0,23,48,175,2,34,11]

// filter - sprawdza, jakie elementy tablicy spełniają dany warunek; argumentem filter jest callback - funkcja, którą podajemy jako argument do innej funkcji
function number(x) {
    return x > 2 !== 0
}
console.log(numbers.filter(number));

// forEach - na każdym elemencie tablicy wykonuje jakiś kod, np. mnoży wszystkie elementy x5
numbers.forEach(number => console.log(number *5))

// includes - sprawdza, czy tablica zawiera dany element
console.log(numbers.includes(230));

// indexOf - sprawdza indeks danego elementu w tablicy
// jeśli jakiegoś elementu nie ma, zawsze zwraca nam -1
console.log(numbers.indexOf(230));

// map vs forEach
// forEach nic nie zwraca, po prostu mnoży i pokazuje w konsoli (newNumbers jest undefined); zaś map zwraca nową tablicę
// const numbers = [0, 1, 2, 3]

// const newNumbers = numbers.forEach(number => console.log(number *2))
// console.log(newNumbers);

// const mapNumbers = numbers.map(number => number *2)
// console.log(mapNumbers);