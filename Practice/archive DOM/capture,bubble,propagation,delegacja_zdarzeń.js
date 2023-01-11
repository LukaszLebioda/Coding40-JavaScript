// Capturing
// Bubbling
// stopPropagation
// pointer-event: none
// delegacja zdarzeń - nie dokończyłem, wymiękłem
// html
// css

// faza CAPTURING (PRZECHWYTYWANIA) idzie od góry do dołu DOM, od najstarszego elementu do najmłodszego
// faza BUBBLING (BĄBELKOWANIA) idzie z góry do dołu, od najmłodszego elementu do najstarszego
// w przypadku addEventListenerów domyślna jest faza BUBBLING;

// -------------------------------------

// najpierw pobieramy elementy do zmiennych
const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".gold");

// potem tworzymy funkcje wypisujące nazwy tych elementów w konsoli
const infoLime = () => {
    console.log("%clime", "color: lime; text-transform: uppercase");
}

const infoBlue = () => {
    console.log("%cblue", "color: royalblue; text-transform: uppercase");
}

const infoGold = () => {
    console.log("%cgold", "color: gold; text-transform: uppercase");
}

// na końcu nadajemy addEventListenery (domyślnie: bubbling)
lime.addEventListener("click", infoLime);
blue.addEventListener("click", infoBlue);
gold.addEventListener("click", infoGold);
// możemy to zrobić z różnymi opcjami:
// {once: true} - można kliknąć dany przycisk tylko raz
// {capture: true} - zmieniamy domyślny bubbling na capturing, np.:
// lime.addEventListener("click", infoLime, {capture: true});
// blue.addEventListener("click", infoBlue, {capture: true});
// gold.addEventListener("click", infoGold, {capture: true});

// ------------------------------------------------

// STOP PROPAGATION:
// wyłącza fazę BUBBLING i sprawia, że klikamy tylko jeden element, np. żółty; 
// zatem elementy pod spodem są nie-aktywne;

// const infoGold = (e) => {
//     e.stopPropagation()
//     console.log("%cgold", "color: gold; text-transform: uppercase");
// }

// ------------------------------------------------

// pointer-event: none;
// nadanie elementowi takiego css-a sprawia, że kliknięcie np. w żółtego diva nic nie robi, nie uruchamia żadnego skryptu;
// zatem elementy pod spodem są aktywne, wyłączony zaś zostaje element wierzchni

// -------------------------------------------------

// DELEGACJA ZDARZEŃ

// pobieramy wszystkie divy o klasie circle:
const allCircles = document.querySelectorAll(".circle");

// i tworzymy funkcję, która będzie nasłuchiwać na clicka naraz dla wszystkich divów:
allCircles.forEach(circle => circle.addEventListener("click", () => console.log(circle)))

// następnie tworzymy dynamicznie diva, nadajemy mu klasę i dodajemy go do golda:
const newCircle = document.createElement("div");
newCircle.classList.add("circle");
gold.append(newCircle);

// tworzymy funkcję dla rodzica, czyli lime, która będzie działać na lime i na wszystkie jego dzieci:
lime.addEventListener("click", () => console.log("test"));


// -------------------------------------------------

/* HTML
<div>
<div class="circle lime">
    <div class="circle blue">
        <div class="circle gold"></div>
    </div>
</div>
</div>
*/

// -------------------------------------------------

/* CSS
.circle
{
    border-radius: 50%;
}
.lime
{
    height: 100px;
    width: 100px;
    background-color: lime;
    position: absolute;
}
.blue
{
    height: 60px;
    width: 60px;
    background-color: royalblue;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
.gold
{
    height: 30px;
    width: 30px;
    background-color: gold;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
*/


