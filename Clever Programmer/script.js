// this function returns the biggest value of an array

// const max = (numbers) => {
//     let result = numbers[0]
    
//     for(const number of numbers) {
//         if(number[0] < number[0]+1) {
//             result = number
//         }
//     }

//     return {result}
// }
// console.log(max([1,2,3,4,5,3,4,9]));

//------------------------------------

// this function counts how many times a letter appears in a phrase

// const letterFrequency = (phrase) => {
//     let frequency = {}
//     for(const letter of phrase) {
//         if(letter in frequency) {
//             frequency[letter] += 1
//         } else {
//             frequency[letter] = 1
//         }
        
//     }
//     return frequency
// }
// console.log(letterFrequency("haha"))
// console.log(letterFrequency("Łukasz Lebioda"))

//------------------------------------

// this function counts how many times a word appears in a phrase:

const wordFrequency = (phrase) => {
    let frequency = {}
    let words = phrase.split(" ")

    for(const word of words) {
        // console.log(word)
        if(word in frequency) {
          frequency[word] += 1  
        } else {
            frequency[word] = 1
         }
        }
        // console.log(words);
        return frequency
}
console.log(wordFrequency("what lol what yo yo yo yo"))

