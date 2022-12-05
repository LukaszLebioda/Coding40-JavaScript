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

// inny jeszcze przykład:

let promo = "30%"

switch (promo) {
    case "20%":
        console.log("Dziś mamy 20% zniżki!");
        break
    case "30%":
        console.log("Dziś mamy 30% zniżki!!!");
        break
    case "10%":
        console.log("Słabiutka zniżka dziś...");
    default:
        console.log("Sorki, dziś nie mamy zniżek :(");
}
