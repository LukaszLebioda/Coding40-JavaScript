// faza CAPTURING (PRZECHWYTYWANIA) idzie od góry do dołu, od najstarszego elementu do najmłodszego
// faza BUBBLING (BĄBELKOWANIA) idzie z góry do dołu, od najmłodszego elementu do najstarszego

// stopPropagation: wyłącza fazę BUBBLING i sprawia, że klikamy tylko jeden element
// pointer-event: none - w CSS 

// w przypadku addEventListenerów domyślna jest faza BUBBLING;

// najpierw pobieramy elementy do zmiennych
const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".gold");

// potem tworzymy funkcje wypisujące nazwy tych elementów w kolorze tych elementów
const infoLime = () => {
    console.log("%clime", "color: lime; text-transform: uppercase");
}

const infoBlue = () => {
    console.log("%cblue", "color: royalblue; text-transform: uppercase");
}

const infoGold = () => {
    console.log("%cgold", "color: gold; text-transform: uppercase");
}

// opcja ze stop.Propagation
// const infoGold = (e) => {
//     e.stopPropagation()
//     console.log("%cgold", "color: gold; text-transform: uppercase");
// }

// na końcu nadajemy addEventListenery (domyślnie: bubbling)
// lime.addEventListener("click", infoLime);
// blue.addEventListener("click", infoBlue);
// gold.addEventListener("click", infoGold);

// możemy to zrobić z różnymi opcjami:
// {once: true} - można kliknąć tylko raz
// {capture: true} - zmieniamy domyślny bubbling na capturing
// lime.addEventListener("click", infoLime, {capture: true});
// blue.addEventListener("click", infoBlue, {capture: true});
// gold.addEventListener("click", infoGold, {capture: true});

lime.addEventListener("click", infoLime);
blue.addEventListener("click", infoBlue);
gold.addEventListener("click", infoGold);

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


