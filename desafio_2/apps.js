// Exercício 1
function exibirOlaMundo() {
    console.log("Olá, mundo!");
}

exibirOlaMundo();

// Exercício 2
function exibirNome(nome) {
    console.log(`Olá, ${nome}`);
}

exibirNome("Rubens Mariano");

// Exercício 3
function calcularDobro(numero) {
    return numero * 2;
}

console.log(calcularDobro(15));

// Exercício 4
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(12, 10, 15);
console.log(media);

// Exercício 5
function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(12, 10);
console.log(maiorNumero);

// Exercício 6
function quadrado(numero) {
    return numero * numero;
}

let resultado = quadrado(5);
console.log(resultado);
