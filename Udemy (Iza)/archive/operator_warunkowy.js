const number = 9000;

if (number <=100) {
    console.log("BAD");
} else {
    console.log("GOOD");
} 

// to samo można uzyskać za pomocą OPERATORA WARUNKOWEGO
// który działa wg wzoru x ? y : v

// najpierw wstawiamy wartość, którą chcemy sprawdzić: number <= 100
// dajemy pytajnik i podajemy, co się ma wykonać, jeśli TRUE, a następnie piszemy dwukropek :
// a po : podajemy, co się ma wykonać, jeśli FALSE
// korzystamy z tego TYLKO zamiast prostej funkcji IF - ELSE
const number2 = number <= 100 ? "BAD2" : "GOOD2";
console.log(number2);

// inny przykład, z funkcją

const isLoggedIn = true;

function loggedIn() {
    console.log("User is logged");
}

function loggedOut() {
    console.log("User is NOT logged");
}

if (isLoggedIn) {
    loggedIn()
} else {
    loggedOut()
}
