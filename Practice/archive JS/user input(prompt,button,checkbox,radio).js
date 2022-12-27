// window.prompt
let username = window.prompt("What's Your name?")
console.log(username);

// document.getElementById
/* HTML:
<label id="myLabel">Enter Your name</label><br>
<input type="text" id="myText"><br>
<button type="button">SUMBIT</button>  
*/
let username2;
document.getElementById("myButton").onclick = function() {
    username2 = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = `Hello ${username}`;
    console.log(username2);
}

// -------------------------------------------------------------------------------

// CHECKBOXES (with get element):

/* HTML:
<label for="myCheckbox">check if necessary</label>
<input type="checkbox" id="myCheckbox"> <br>
<button id="myButton">just click it</button> 
*/

/*
document.getElementById("myButton").onclick = function() {

    const checkBox = document.getElementById("myCheckbox");

    if(checkBox.checked == true) {
        console.log("You have subcribed");
    } else {
        console.log("You have not subscribed");
    }
}
*/

// -------------------------------------------------------------------------------

// RADIO BUTTONS:
/* HTML:
<label for="radioButton1">HTML</label>
<input type="radio" name="sameName" id="radioButton1"><br>
<label for="radioButton2">CSS</label>
<input type="radio" name="sameName" id="radioButton2"><br>
<label for="radioButton3">JavaScript</label>
<input type="radio" name="sameName" id="radioButton3"><br>
<button id="myButton">just click it</button>  
*/

/*
const radio1 = document.querySelector("#radioButton1");
const radio2 = document.querySelector("#radioButton2");
const radio3 = document.querySelector("#radioButton3");
const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
    if(radio1.checked == true) {
        console.log("You have selected HTML");
    } else if (radio2.checked == true) {
        console.log("You have selected CSS");
    } else if (radio3.checked) {
        console.log("You have selected JavaScript");
    } else {
        console.log("You haven't chosen anything");
    }
})
*/