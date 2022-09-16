// to output sth on the www page
console.log("I like pizza!");
console.log("It's really good!");

// to make a window pop up:
// window.alert("Let's crack this code open!")

// so this is a single-line comment

/*
    and 
    this 
    is 
    a
    multi-line
    comment
*/

// declaring and then assinging the value 
// or in one line: let age = 40)
// 3 types of variable: number, string and boolean (true/false)
let age;
age = 40;

let name = "Łukasz";
let ifStudent = false;
let idNumber = 87870;

console.log(age);
console.log(name);
console.log(ifStudent);
console.log(idNumber);

// different arithmetic expressions (operands and operators) with shortcuts
//idNumber = idNumber + 1;
//idNumber = idNumber - 3;
//idNumber = idNumber / 3;
//idNumber = idNumber * 3;

//idNumber += 1;
//idNumber -= 1;
//idNumber *= 1;
//idNumber /= 1;

console.log(idNumber);

// przykładowe działanie modulo (reszta wychodzi nam w tym przypadku 6)
let remainingIdNumber = idNumber % 7;
console.log(remainingIdNumber);

// trzy różne sposoby konkatenacji
console.log("Hello,", name);
console.log("Hello," + " " + name);
console.log("Hello, " + name);

console.log("You're", age, "years old");
console.log("You're" + " " + age + " " + "years old");

console.log("Enrolled: ", ifStudent);
console.log("Your ID  number is ", idNumber);


// how to display js on html page (podmieniamy element id z html)
document.getElementById("name").innerHTML = "Hello " + name;
document.getElementById("age").innerHTML = "You're " + age + " years old";
document.getElementById("ifStudent").innerHTML = "Enrolled: " + ifStudent;
document.getElementById("idNumber").innerHTML = "ID number: " + idNumber;


