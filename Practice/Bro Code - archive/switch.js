// let grade = "B";

// if (grade == "A") {
//     console.log("Great!");
// } else if (grade == "B") {
//     console.log("Good!");
// } else if (grade == "C") {
//     console.log("So, so");
// } else {
//     console.log("It's not a letter grade!");
// }

// if there are meny else-if's, maybe it'd be better to use a switch:

let grade2 = "PIZZA";

switch(grade2) {
    case "A":
      console.log("Great!");
      break;
    case "B":
        console.log("Good!");
    case "C":
      console.log("So, so");
      break;
    default:
      console.log(grade2, "is not a letter grade!");
  }