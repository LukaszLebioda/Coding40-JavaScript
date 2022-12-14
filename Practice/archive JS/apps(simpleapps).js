// // 1) counter programme - version one 
// // no onclick attribute: <button type = button id = "increase" >INCREASE</button>

// let counter = 0;

// document.getElementById("decrease").onclick = function() {
//     counter -= 1;
//     document.getElementById("result").innerHTML = counter;
// }

// document.getElementById("reset").onclick = function() {
//     counter = 0;
//     document.getElementById("result").innerHTML = counter;
// }

// document.getElementById("increase").onclick = function() {
//     counter += 1;
//     document.getElementById("result").innerHTML = counter;
// }

// -------------------------------------------------------------------------------------------------------------

// // 2) counter programme - version two
// // with onclick attribute: <button type = button id = "increase" onclick="increase()">INCREASE</button> 

// let counter = 0;

// function decrease() {
//     counter -= 1;
//     document.getElementById("myLabel").innerHTML = counter;
// }

// function increase() {
//     counter += 1;
//     document.getElementById("myLabel").innerHTML = counter;
// }

// function reset() {
//     counter = 0;
//     document.getElementById("myLabel").innerHTML = counter;
// }

// -----------------------------------------------------------------------------------------------------------------

// // random number app => roll a dice (numbers between 1 and 6) 
// // Math.random generates a decimal between 0 and 1

// one way:
// // let x = Math.random();
// // console.log(x);
// // x = (x * 6) + 1;
// // x = Math.floor(x);
// // console.log(x);

// other way:
// let x;
// let y;
// let z;

// document.getElementById("button").onclick = function() {
//     let x = Math.floor(Math.random() * 6) + 1;
//     let y = Math.floor(Math.random() * 6) + 1;
//     let z = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("label1").innerHTML = x;
//     document.getElementById("label2").innerHTML = z;
//     document.getElementById("label3").innerHTML = x;
// }