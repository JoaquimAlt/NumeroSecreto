function validarFalaEmNumero(fala) {
    
    const numero = +fala;

    if (naoENumero(numero)) {
        falaNaTela.innerHTML += `<div>Você não disse um Número :/</div>`;
        return;
    }
    else if (maiorOuMenorQueOLimite(numero)){
        falaNaTela.innerHTML += `<div>Tem q ta entre ${menor} e ${maior} amigão :v </div>`;
        return;
    }
    else if (numero === numeroSorteado){
        document.body.innerHTML = `
        <h1>Parabéns você acertou</h1>
        <h4>Numero secreto: ${numeroSorteado}</h4>
        <a class="rejogar" src="window.location.resource()" href="">Jogar novamente</a>
        `;

        return;
    }
    else if (numero > numeroSorteado){
        falaNaTela.innerHTML += `<div>O número sorteado é menor<i class="fa-solid fa-arrow-down"></i></div>`;
    }
    else if (numero < numeroSorteado){
        falaNaTela.innerHTML += `<div>O número sorteado é maior<i class="fa-solid fa-arrow-up"></i></div>`;
    }
    
}

function naoENumero(numero) {
    return Number.isNaN(numero);
}

function maiorOuMenorQueOLimite(numero) {
    return numero > maior || numero < menor;
}
