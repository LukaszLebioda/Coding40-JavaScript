document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked == true) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp)
        document.getElementById("tempLabel").innerHTML = `The result is ${temp} Celsius`
    } else if(document.getElementById("fButton").checked == true){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp)
        document.getElementById("tempLabel").innerHTML = `The result is ${temp} Fahrenheit`
    } else{
        document.getElementById("tempLabel").innerHTML = "You didn't select anything"
    }


}

function toCelsius(temp){
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}
