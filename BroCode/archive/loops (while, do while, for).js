// while loop - checks the condition first, so it is possible, that the programme doesn't run not a single time
// let userName = "";

// while(userName == "" || userName == null) {
//     userName = window.prompt("Tell me Your name");
// }
// console.log("Hello ", userName);

// do while loop - check the condition last, so it is possible to run the programme at least once
// let userName;

// do {
//     userName = window.prompt("Tell me Your name");
// } while(userName == "")

// console.log("Hello ", userName);

// for loop - repeat some code certain amount of times (while loops are better when we potentially want to create an infinite loop)

// counter is a local variable, that doesn't exist outside the loop
// for(let counter = 10; counter <= 20; counter++) {
//     console.log(counter);
// } 
// tit is better to use an "i" variable instead of everything else (it's like a temporary variable to count the iterations):
for(let i = 10; i > 0; i--) {
    console.log(i);
} 
console.log("Happy New Year!");