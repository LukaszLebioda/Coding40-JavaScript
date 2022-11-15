// zakresy funkcji

// zakres globalny zmiennej name, zmienna dostępna z każdego miejsca w naszym kodzie
const name = "Lisa"

// funkcja też jest w zakresie globalnym, ale ciało funkcji już nie;
// console.log w ciele funkcji jest już tylko w zakresie lokalnym
const test = () => {
    const name = "Lily" // jak nie zadeklarujemy tu consta, to zaczyta "Lisa" z zakresu globalnego
    console.log(`NAME w funkcji - ${name}`);
                
        const test2 = () => {
            console.log(name);
        }
        test2()

    // const age = 23;
    // console.log(age);
}
test()

// console.log(age); // nie wyświetli, bo age jest tylko lokalnie
console.log(`NAME poza funkcją - ${name}`);
