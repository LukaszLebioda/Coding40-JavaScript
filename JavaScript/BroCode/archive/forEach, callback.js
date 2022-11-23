// // callback - a function passed as an argument to another function;

// // no callback:
// // let total = sum(3, 18);
// // displayConsole(total)

// // function sum(x, y) {
// //     let result = x + y;
// //     return result
// // } 

// // function displayConsole(result) {
// //     console.log(result);
// // }

// // function displayDOM(result) {
// //     document.getElementById("myLabel"),innerHTML = result;
// // }

// // callback (no parenthesis!):
// sum(2, 3, displayConsole);
// sum(2, 3, displayDOM);

// function sum(x, y, callBack) {
//     let result = x + y;
//     callBack(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// function displayDOM(result) {
//     document.getElementById("myLabel"),innerHTML = result;
// }

// -----------------------------------

// array.forEach() - a function that executes a provided callback function for each array element
// 3 arguments are provided for us - array, index, element;


let students = ["patrick", "michael", "jason"]
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1); 
}

function print(element) {
    console.log(element);
}
