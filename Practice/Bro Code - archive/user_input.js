// let username = window.prompt("What's Your name?")
// console.log(object);

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "hello " + username;
}