let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

document.getElementById("button").onclick = function() {
    document.getElementById("label1").innerHTML = x;
    document.getElementById("label2").innerHTML = z;
    document.getElementById("label3").innerHTML = x;
}