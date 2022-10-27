// return - returns a value back to the place where you invoked a function

let area;
let width;

height = window.prompt("shorter side - a")
width = window.prompt("longer side - b")

// if a = 10 and b = 20, the area is = 200
// "return result" returns the result 200 to the place where the function getArea() was invoked
// so as it is "area = 200" below
area = getArea(width, height);



function getArea(width, height) {
    // it coul be simple "return width * height" instead
    let result = width * height
    return result;
    console.log("The area is:", area);
}


