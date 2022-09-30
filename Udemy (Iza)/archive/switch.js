// w pewnych sytuacjach lepiej użyć switcha, niż ifa

// const day = "poniedziałek";

// if (day == "poniedziałek") {
//     console.log("Dziś jest niestety poniedziałek");
// } else if (day == "środa") {
//     console.log("Dziś jest niestety środa");
// } else if (day == "sobota") {
//     console.log("Huraaaa! Mamy weekend!");
// }

const day2 = "sdfcsdfobota";
switch (day2) {
  case "poniedziałek":
    console.log("Dziś jest niestety poniedziałek");
    break
  case "środa":
    console.log("Dziś jest niestety środa");
    break
  case "sobota":  
  console.log("Huraaaa! Mamy weekend!");
    break
  default:
    console.log("Przepraszamy, ale nie mamy takiego dnia");
}

