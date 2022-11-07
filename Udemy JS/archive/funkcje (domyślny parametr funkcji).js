// w takim przypadku, jeśli nie podamy argumentu, consol.log wyloguje nam undefined:
const name = (name) => {
    console.log(`Cześć ${name}, jak się masz?`);
}
name()

// ale możemy użyć domyślnego parametru funkcji:
const name2 = (name = "Nieznajomy") => {
    console.log(`Cześć ${name}, jak się masz?`);
}
name2()
name2("Brajan")

// inny przykład:
const number = (x = 100, y = -78) => {
    console.log(x + y);
}
number()
number(10)

