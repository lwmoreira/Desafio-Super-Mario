let form = document.querySelector('.contact-us')
let masc = document.querySelector('.masc-form')
let audioItsmeMario = document.querySelector('.audioItsmeMario')
let submitAudio = document.querySelector('.submit-audio')

function cliqueiNoBotao() {
    form.style.left = "400px"
    masc.style.visibility = "visible"
    submitAudio.play();

}

function sendForm() {
    form.style.left = "-300px"
    masc.style.visibility = "hidden"
    audioItsmeMario.play();
 }