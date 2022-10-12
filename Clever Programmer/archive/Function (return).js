// static function, no arguments
function sayMyName1 () {
    let name = "Łukasz"
    console.log("You're name is " + name);
}
// sayMyName1 ()

// dynamic function, one argument - "name"
function sayMyName2 (name) {
    console.log("You're name is " + name);
}
// sayMyName2 ("Łukasz")

// function with 2 arguments, that returns a result of an arithmetic operation
function sum(a, b) {
    return a + b;
} 
//console.log(sum(340, 1000));
num1 = sum(340, 1000)
console.log(num1);