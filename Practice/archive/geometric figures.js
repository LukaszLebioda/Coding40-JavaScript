// circumference of a circle

const PI = 3.14159;
let radius;
let result;

const circumference = (radius) => {
    // radius = window.prompt("Enter circle radius");
    // radius = Number(radius);
    result = 2 * PI * radius;
    console.log(`The circumference is ${result}.`);
}
circumference(9);