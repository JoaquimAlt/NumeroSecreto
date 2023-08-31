const menorNumero = document.querySelector('#menor-valor');
const maiorNumero = document.querySelector('#maior-valor');

const menor = 0;
const maior = 1000;

menorNumero.innerHTML = menor;
maiorNumero.innerHTML = maior;

const numeroSorteado = numeroDaSorte(menor, maior);

function numeroDaSorte(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(parseInt(Math.random() * (max - min) + min)); 
}

console.log(numeroSorteado)