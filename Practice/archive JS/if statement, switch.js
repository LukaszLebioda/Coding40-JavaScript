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
const grade = "6";

switch(grade) {
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
        console.log(grade, "is not a grade!");
}

// SWITCH 2
const grade = 95;

switch(true) {
    case grade >= 90:
        console.log("Otrzymałeś ocenę: Celujący");
        break;
    case grade >= 80:
        console.log("Otrzymałeś ocenę: Bardzo dobry");
        break;
    case grade >= 70:
        console.log("Otrzymałeś ocenę: Dobry");
        break;
    case grade >= 60:
        console.log("Otrzymałeś ocenę: Dostateczny");
        break;
    case grade >= 50:
        console.log("Otrzymałeś ocenę: Mierny");
        break;
    case grade >= 40:
        console.log("Otrzymałeś ocenę: Niedostateczny");
        break;

    default:
        console.log(grade, "is not a grade!");
}



















