// jeżeli number + string to string
// jeżeli number * string to number
const num1 = 12;
const num2 = "12";
const num3 = num1 + num2;
console.log(num3);
const num4 = num1 * num2;
console.log(num4);

// Not a Number NaN
console.log(0/0);
console.log("abcd" * 12);

// zaokrąglamy (jako argument podajemy miejsce po przecinku)
const num5 = 234.67544334;
console.log(num5.toFixed(1));

// zamiana stringa na number
const num6 = "123";
console.log(parseInt(num6));

// --------------------------------------------------

// boolean
let a = true;
let b = false;
console.log(typeof b);
console.log(a);
console.log(b);

// najprostsza funkcja:
const beerAllowed = 17
if (beerAllowed >= 18) {
    console.log("true");
}
else{
    console.log("false");
}
