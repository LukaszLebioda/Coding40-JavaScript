// && (ampersand) logical operator

let temperature = 20;
let sunny = false;

if(temperature >0 && temperature < 30 && sunny) {
    document.write("It's not bad outside! ")
} else {
    document.write("Stay home! ")
}

// || (or) logical operator

let temperature2 = -2;

if(temperature2 >= 0 || temperature2 <= 30) {
    document.write("It's not bad outside")
} else {
    document.write("Stay home!")
}

// ! NOT logical operator

let temperature3 = 15;
let sunny3 = true;

    if(!(temperature3 > 0) && !sunny3) {
        console.log("It's very cold and cloudy outside!!")
    } else {
        console.log("It's not especially cold'n'cloudy outside...")
    }