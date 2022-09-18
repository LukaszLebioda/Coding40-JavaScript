// 2 ways of accepting user input

// easy way with window prompt:
// let username = window.prompt("Hello! Tell us who You are");
// console.log(username);

// more diccifult, but more practical way:
// first: inputs in html:
/* 
<label>Enter Your name</label><br>
<input type ="text" id = "username"><br>
<input type = submit value = press id = "submit">
<button type = "button" id = "button">push</button>
*/

document.getElementById("username").innerHTML = username;