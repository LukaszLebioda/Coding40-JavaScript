
// if & else if
const password = "sdfgsdgsfgtrhjgfhgdfhdcfgd_87565556001";

if(password.length > 20 && password.includes("!")) {
    console.log("Masz bardzo dobre hasło!");
} else if(password.length > 15) {
    console.log("Masz dosyć dobre hasło!")
} else {
    console.log("Masz słabe hasło!");
}

const color = "blue";

// funkcje można zagnieżdżać
if(color != "blue") {
    if(10>0) {
        console.log("true true");
    } else {
        console.log("false false");
    }
} else {
    console.log("false");
}