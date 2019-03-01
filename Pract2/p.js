var pistas = ['contando-lunares.mp3', 'calma.mp3', 'ella.mp3', 'bichote.mp3','secreto.mp3'];
var current_song = 0;
var audio = document.querySelector('#cancion');
audio.src = pistas[current_song];


var dummy = "";

function Mostrar_lista(){
    pistas.forEach(function(e,i){
        dummy += `<div id"${i} OnClick="Bombita(${i})"> ${i++} ${e} </div>`;
    });
    var lista = document.querySelector('#lista');
    lista.innerHTML = dummy;

}

function Bombita(cancion){
    current_song = cancion;
    audio.src = pistas[cancion];
    audio.play().then( ()=> {
        Mostrar();
    });
}



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
    audio.play().then( ()=> {
        Mostrar();
    });
}

function Anterior() {

    if (current_song == 0) {
        current_song = pistas.length - 1;
        var audio = document.querySelector('#cancion');
        audio.src = pistas[current_song];
        audio.play().then( ()=> {
            Mostrar();
        });
    }
    else {
        current_song--;
        var audio = document.querySelector('#cancion');
        audio.src = pistas[current_song];
        audio.play().then( () =>{
            Mostrar();
        });    
    }
}

function Mostrar() {
    
    let minutos = Math.trunc(audio.duration/60);
    let segundos = Math.round(audio.duration%60);
    dummy = pistas[current_song].split('.')[0] + ' ' + minutos + ':' + segundos;
    anadir(dummy);
}

function anadir (add){
    var temazo = document.querySelector('#temita');
    temazo.innerHTML = add;
}

function Reproducir_Lista(){





}



