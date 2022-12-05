// window.prompt
let username = window.prompt("What's Your name?")
console.log(username);

// document.getElementById
/* <label id="myLabel">Enter Your name</label><br>
<input type="text" id="myText"><br>
<button type="button">SUMBIT</button>  */
let username2;
document.getElementById("myButton").onclick = function() {
    username2 = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = `Hello ${username}`;
    console.log(username2);
}