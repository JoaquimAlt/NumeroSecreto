const falaNaTela = document.querySelector('#chute');
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', textoDoAudio)

function textoDoAudio(audio) {
    const fala = audio.results[0][0].transcript;
    mostrarFala(fala);
    validarFalaEmNumero(fala);
}

function mostrarFala(fala) {
    falaNaTela.innerHTML = `<div>Você disse</div>
    <span class="box">${fala}</span>`;
}

recognition.addEventListener('end', function(){
    recognition.start();
})

