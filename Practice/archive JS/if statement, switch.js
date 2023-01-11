// IF STATEMENT
const password = "Kdfgsdgsfgtrhjgfhgdfhdcfgd_87565556001?!!";

if(password.length > 20 && (password.includes("!") || password.includes("?"))) {
    console.log("Masz bardzo dobre hasło!");
} else if(password.length > 15) {
    console.log("Masz dobre hasło!")
} else {
    console.log("Masz słabe hasło!");
}

// SWITCH 1
const grade1 = "6";

switch(grade1) {
    case "6":
        console.log("Otrzymałeś ocenę: Celujący");
        break;
    case "5":
        console.log("Otrzymałeś ocenę: Bardzo dobry");
        break;
    case "4":
        console.log("Otrzymałeś ocenę: Dobry");
        break;
    case "3":
        console.log("Otrzymałeś ocenę: Dostateczny");
        break;
    case "2":
        console.log("Otrzymałeś ocenę: Mierny");
        break;
    case "1":
        console.log("Otrzymałeś ocenę: Niedostateczny");
        break;

    default:
        console.log(grade1, "is not a grade!");
}

// SWITCH 2
const grade2 = 95;

switch(true) {
    case grade2 >= 90:
        console.log("Otrzymałeś ocenę: Celujący");
        break;
    case grade2 >= 80:
        console.log("Otrzymałeś ocenę: Bardzo dobry");
        break;
    case grade2 >= 70:
        console.log("Otrzymałeś ocenę: Dobry");
        break;
    case grade2 >= 60:
        console.log("Otrzymałeś ocenę: Dostateczny");
        break;
    case grade2 >= 50:
        console.log("Otrzymałeś ocenę: Mierny");
        break;
    case grade2 >= 40:
        console.log("Otrzymałeś ocenę: Niedostateczny");
        break;

    default:
        console.log(grade2, "is not a grade!");
}



















