// // document.createElement
// // najpierw tworzymy element
// const ulList = document.createElement("ul");
// const liItem = document.createElement("li");
// // a potem tworzymy jego zawartość
// liItem.textContent = "Cześć!";
// console.log(ulList);
// console.log(liItem);
// // a dopiero na końcu dodajemy to wszystko do dokumentu
// document.body.appendChild(ulList);
// ulList.appendChild(liItem);

const divsss = document.querySelector("div")
const p = document.createElement("p")
divsss.appendChild(p)
p.textContent = "dfdf"