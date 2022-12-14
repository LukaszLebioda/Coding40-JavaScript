// outerHTML vs innerHTML

const btn = document.querySelector("button");

console.log(btn); // wyświetla wszystko
console.log(btn.outerHTML); // wyświetla pwszystko
console.log(btn.innerHTML); // wyświetla tylko value przycisku

// btn.outerHTML = 123; // usuwa przycisk i wstawia tekst
// btn.innerHTML = ""; // usuwa tekst (przycisk pozostaje)

console.log("-------------");

// innerText = textContent (prawie)
console.log(btn.innerText); // wyświetla value przycisku
console.log(btn.textContent); // wyświetla value przycisku

// // innerHTML - możemy używać tam, gdzie sami wprwadzamy treści
// // ale nie używamy tam, gdzie to User wprowadza treści na naszą stronę (ze względów bezpieczeństwa)
// const input = document.querySelector("input");
// const underInput = document.querySelector(".under-input");

// input.addEventListener("keydown", e => {
//     if(e.key === "Enter") {
//         underInput.textContent = input.value;
//         underInput.innerHTML = input.value;
//         // <h2 style="color:red;">h2</h2>
//     }
// })

// removeChild
const div = document.querySelector("div");
const par = document.querySelector("p");

div.removeChild(par);
console.log(div);

// remove
div.remove();


