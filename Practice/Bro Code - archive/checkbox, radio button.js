// check-box: wheter is checked or not

document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox")

    // if(document.getElementById("myCheckBox").checked == true)
    if(myCheckBox.checked) {
        console.log("You have subscribed!");   
    } else {
        console.log("You haven't subscribed...");
    }
}

// radio buttons: which one is checked

document.getElementById("myButton2").onclick = function() {
const visaCard = document.getElementById("radio1");
const masterCard = document.getElementById("radio2");
const blik = document.getElementById("radio3");

if(visaCard.checked) {
    console.log("You're paying with a Visa");
} else if (masterCard.checked) {
    console.log("You're paying with a MasterCard");
} else if (blik.checked) {
    console.log("You're paying with Blik"); 
} else {
    console.log("No payment type has been selected!");
}
}