
// Exercício 1
function calcularImc(peso, altura) {
    return peso / (altura ** 2);
}

console.log(calcularImc(98, 1.82));


// Exercício 1
function calcularFatorial(numero) {
    if (numero <= 1) {
        return 1;
    } 

    return numero * calcularFatorial(numero - 1);
}

const fatorial = calcularFatorial(6);
console.log(fatorial);


// Exercício 3
function converterDolarEmReal(valorEmDolar) {
    const cotacaoDolar = 4.80;
    const valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

const valorReal = converterDolarEmReal(5.80);
console.log(valorReal);


// Exercício 4
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área Retângulo: ${area.toFixed(2)}`);
    console.log(`Perímetro Retângulo: ${perimetro.toFixed(2)}`);
}

calcularAreaPerimetroSalaRetangular(5.4, 3.2);

// Exercício 5
function calcularAreaPerimetroSalaCircular(raio) {
    const pi = Math.PI;
    const perimetro = 2 * pi * raio;
    const area = pi * (raio ** 2);
    console.log(`Área Círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro Círculo: ${perimetro.toFixed(2)}`);
}

calcularAreaPerimetroSalaCircular(4);

function exibirTabuada(numero, indice=1) {
    if (indice > 10) {
        return
    }

    console.log(`${numero} x ${indice} = ${numero * indice}`)
    exibirTabuada(numero, indice+1)
}

exibirTabuada(5);