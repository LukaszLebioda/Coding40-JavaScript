// // 1) circumference of a circle: c = 2PIr

// const PI = 3.14159;
// let radius;
// let result;

// const circumference = (radius) => {
//     // radius = window.prompt("Enter circle radius");
//     // radius = Number(radius);
//     result = 2 * PI * radius;
//     console.log(`The circumference is ${result}.`);
// }
// circumference(9);

// -------------------------------------------------------------------------------------------------------

// // 2) hypotenuse of a triangle: c2=sqrt(a2 + b2) - version one (with parameters)

// let a;
// let b;
// let c;

// const hypotenuse = (a, b) => {
//     a = Number(a);
//     b = Number(b);  
//     c = Math.pow(a, 2) + Math.pow(b, 2);
//     c = Math.sqrt(c); // or: c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     console.log(`The hypotenuse (c) is ${c}`);
// }
// hypotenuse(3, 5);

// -------------------------------------------------------------------------------------------------------

// // 3) hypotenuse of a triangle: c2=sqrt(a2 + b2) - version two (with user input)

// let a;
// let b;
// let c;

// const hypotenuse = () => {
//     a = window.prompt("Enter side a");
//     a = Number(a);
//     b = window.prompt("Enter side b");
//     b = Number(b);   
//     c = Math.pow(a, 2) + Math.pow(b, 2);
//     c = Math.sqrt(c); // or: c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     console.log(`The hypotenuse (c) is ${c}`);
// }
// hypotenuse();