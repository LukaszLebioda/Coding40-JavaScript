// let weather = prompt('Is it "rain" or "sun"?')

// if (weather == "rain") {
//     console.log("Stay home, it's gonna rain as hell! ☔")
//     alert("Stay home, it's gonna rain as hell! ☔")
// } else {
//     console.log("Go for a walk! It's beautiful outside! 🌞");
//     alert("Go for a walk! It's beautiful outside! 🌞")
// } 

// static function
function sayMyName1 () {
    let name = "Łukasz"
    console.log("You're name is " + name);
}
// sayMyName1 ()

// dynamic function
function sayMyName2 (name) {
    console.log("You're name is " + name);
}
// sayMyName2 ("Łukasz")

// string concatenation
function greeting1 (name) {
    console.log("Hello " + name + ", nice to meet You!");
}
greeting1 ("Łukasz")

// template string 
function greeting2 (name) {
    console.log(`Hello ${name}, nice to meet You!`);
}
greeting2 ("Łukasz")

