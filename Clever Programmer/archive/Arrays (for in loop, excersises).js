// how to make numbers in an array double and create a new array with those doubbled numbers:

// const numbers = [1,2,3,4,5,6]

// const double = (numbers) => {
//     let result = []

//     for (const number of numbers){
//     result.push(number**2);
//     }

//     return result
// }

// console.log(double([10,20,30,40,50]))

// ------------------------------------

// letter counter - worse but running way
// const howManyLetters = () => {
//     const phrase = "Chumbawabma"
//     for (const letters in phrase){
//         console.log(Number(letters)+1);
//     }
// }
// howManyLetters()

//---------------------------------------

// another way:
// const howManyLetters2 = () => {
//     let result = 0
//     const phrase = prompt("Give me Your string")
//     for (const letters in phrase) {
//         result = Number(letters) +1
//     }
//     return { result }
// }
// console.log(howManyLetters2())

// --------------------------------------

// letter counter, easier, better version with prompt:

// const howManyLetters3 = () => {
//     let phrase = prompt("Write your string here")
//     return {result: phrase.length}
//     }
// console.log(howManyLetters3())

//or:

// const letterCounter2 = (phrase) => {
//     return { result: phrase.length }
// } 
// const phrase = prompt("Write Your phrase")
// console.log(letterCounter2(phrase))

// -----------------------------------------

// funkcja, która doda do siebie wszystkie liczby w tablicy:

const sumArray = () => {
    let result = 0
    const numbers = [1,2,3,4,5]

    for(const number of numbers) {
        console.log(number)
        result = result + number
    }
    return {result}
}
console.log(sumArray())




