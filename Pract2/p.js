var pistas = ['contando-lunares.mp3', 'calma.mp3', 'ella.mp3', 'bichote.mp3'];
var current_song = 0;
var audio = document.querySelector('#cancion');
audio.src = pistas[current_song];


function Reproducir() {
    var audio = document.querySelector('#cancion');
    audio.play();
    Mostrar();
}

function Pausa() {
    var audio = document.querySelector('#cancion');
    audio.pause();
}

function Siguiente() {
    current_song++;
    current_song = current_song % pistas.length;
    var audio = document.querySelector('#cancion');
    audio.src = pistas[current_song];
    audio.play();
    Mostrar();
}

function Anterior() {

    if (current_song == 0) {
        current_song = pistas.length - 1;
        var audio = document.querySelector('#cancion');
        audio.src = pistas[current_song];
        audio.play();
        Mostrar();
    }
    else {
        current_song--;
        var audio = document.querySelector('#cancion');
        audio.src = pistas[current_song];
        audio.play();
        Mostrar();
    }
}

function Mostrar() {
    
    var minutos = Math.trunc(audio.duration/60);
    var segundos = Math.round(audio.duration%60);
    dummy = pistas[current_song].split('.')[0] + ' ' + minutos + ':' + segundos;
    anadir(dummy);
}

function anadir (add){
    var temazo = document.querySelector('#temita');
    temazo.innerHTML = add;
}
