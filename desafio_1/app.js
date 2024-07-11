let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function msgConsole() {
    console.log('O botão foi clicado!');
}

function msgAlerta() {
    alert('Eu amo JS');
}

function msgPrompt() {
    let cidade = prompt('Digite o nome de uma diade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaNumeros() {
    let num1 = parseInt(prompt('Digite o 1º número:'));
    let num2 = parseInt(prompt('Digite o 2º número:'));
    let soma = num1 + num2;
    alert(`A soma de ${num1} + ${num2} = ${soma}`);
}