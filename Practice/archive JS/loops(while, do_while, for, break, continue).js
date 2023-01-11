// while loops
// do while loops
// for loops (example 1 - numbers, example 2 - arrays)
// break
// continue

// ----------------------------------------------------------------

// while loop - repeats a code while a condition is true;

let username = "";
    while(username == "" || username == null) {
        username = window.prompt("Enter Your name:")
    }
console.log(`Hello ${username}`);

// let i = 0;
// while (i < 5) {
//     i++;
//     console.log(i);
// }

// ----------------------------------------------------------------

// do while loop - repeats a code while a condition is true, but first executes the code, what allows to run a script at least once

let username2;
do {
    username2 = window.prompt("Enter Your name:");
} while (username2 == "" || username2 == null)
console.log(`Hello ${username2}`);

let i = 0;
do {
    i++
    console.log(i);
} while (i < 7)

// ----------------------------------------------------------------

// for loop with numbers
// for loop - repeats a code certain amount of times
// we use it when we want to repeat code a limited, certain no. of times
// (while loops are better suited for a potentially unlimited repetition of code or when we don't know how many times the script should execute)

for (let i = 12; i>=0; i-=1) {
    console.log(i);
}
console.log("Happy New Year!");

// ----------------------------------------------------------------

// for loop with arrays

const animals = ["🐈", "🐕", "🐟", "🐹", "🐇"];

// console.log(animals);
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// ----------------------------------------------------------------

// break - breaks out of the loop
for (let i = 1; i<=20; i++){
    if(i==13){
        break;
    }
    console.log(i);
}

// ----------------------------------------------------------------

// continue - skips an iteration of the loop
for (let i = 1; i<=20; i++){
    if(i==13){
        continue;
    }
    console.log(i);
}




