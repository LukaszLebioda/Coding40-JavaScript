function calculate () {
    let foodPrice = Number(prompt("How much was the food?"))
    let tipPercentage = Number(prompt("What tip % would You like to leave?")) / 100
    let tipAmount = foodPrice * tipPercentage
    let total = foodPrice + tipAmount

    console.log("The tip amount is " + tipAmount + " PLN" + " so You'll pay " + total + " PLN total")

    alert("The tip amount is " + tipAmount + " PLN" + " so You'll pay " + total + " PLN total")
}

calculate ()
 