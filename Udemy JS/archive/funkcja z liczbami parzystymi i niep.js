let score;

const add = (a, b) => {
    score = a + b
        if(score % 2 === 0) {
            fun1();
        } else {
            fun2();
        }
}

const fun1 = () => {
    console.log(`Liczba ${score} jest parzysta`);
}

const fun2 = () => {
    console.log(`Liczba ${score} jest nieparzysta`);
}

add(20,8)
add(2,9)