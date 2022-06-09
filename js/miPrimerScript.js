function ocultarMostrarImg() {
    //display = none, block
    var valorDisplay = document.getElementById('idImagen').style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
    } else {
        valorDisplay = 'none';
    }
    document.getElementById('idImagen').style.display = valorDisplay;



}

function encender() {
    var ValorSRC = document.getElementById('idFoco').src;
    document.getElementById('idFoco').src = '../img/encendido.png'

}

function apagar() {
    var ValorSRC = document.getElementById('idFoco').src;
    document.getElementById('idFoco').src = '../img/apagado.png'

}

function onOff() {
    var valorSrc = document.getElementById('idFoco');
    if (valorSrc.src.match("apagado.png")) {
        valorSrc = "../img/encendido.png";
    } else {
        valorSrc = "../img/apagado.png";
    }
    document.getElementById('idFoco').src = valorSrc;
}