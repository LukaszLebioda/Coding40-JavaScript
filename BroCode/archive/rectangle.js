// nested loops
// for(let i = 1; i <= 2; i++) {
//     for(let j = 1; j <= 3; j++) {
//         console.log(j);
//     }
// }

// let's draw a rectangle into our document
let symbol = window.prompt("Enter a symbol to use:")
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= columns; j++) {
        document.getElementById("rectangle").innerHTML += symbol; 
    }
    document.getElementById("rectangle").innerHTML += "<br>";
}

