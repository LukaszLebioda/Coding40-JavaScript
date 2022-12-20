// e = event
// to jest tzw. PointerEvent (albo MouseEvent), czyli obiekt, który zawiera
// mnóstwo użytecznych metod i właściwości, np.:
// clientX & clientY - pokazuje, ile pikseli na osi x i y kliknęliśmy na przycisku;

// html: <button class="test info btn abcd">PRZYCISK</button>
const btn = document.querySelector("button");

const test = (e) => {
    console.log(e); // wyświetla PointerEvent z metodami, m.in. clientX i clientY
    console.log(e.target); // wyświetla element, który kliknęliśmy
    console.log(e.target.classList); // wyświetla wszystkie klasy elementu
    console.log(e.target.offsetTop); // wyświetla ilość pikseli od góry przeglądarki do elementu
    console.log(e.target.firstChild); // wyświetla pierwsze dziecko elementu
    console.log(e.target.innerHTML); // wyświetla innerHTML elementu
    console.log(e.target.nextElementSibling); // wyświetla najbliższe rodzeństwo elementu
    console.log(e.target.parentElement); // wyświetla rodzica elementu
}

btn.addEventListener("click", test);
