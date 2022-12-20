// IF STATEMENT
const password = "Kdfgsdgsfgtrhjgfhgdfhdcfgd_87565556001?!!";

if(password.length > 20 && (password.includes("!") || password.includes("?"))) {
    console.log("Masz bardzo dobre hasło!");
} else if(password.length > 15) {
    console.log("Masz dobre hasło!")
} else {
    console.log("Masz słabe hasło!");
}

// SWITCH
const day = "saturday";

switch(day) {
    case "monday":
        console.log("It's a weekday :(");
        break;
    case "tuesday":
        console.log("It's a weekday :(");
        break;
    case "wednesday":
        console.log("It's a weekday :(");
        break;
    case "thursday":
        console.log("It's a weekday :(");
        break;
    case "friday":
        console.log("It's a weekday :(");
        break;

    default:
        console.log("It's weekend :)");
}

// TERNARY OPERATOR
// warunek ? true : false
const number = 90;

number < 100 ? console.log("Too little") : console.log("Enough");
// albo:
newNumber = number < 100 ? "Too little" : "Enough";
console.log(newNumber);


















