
var puntuacion = 0;
var contador = 0;

function start_game() {
    document.querySelector('#start').style.display='none';
    var music = new Audio('music.mp3');
    music.play();
    var interval = setInterval(function () {
        Limpiar_tablero();
        Pintar();
    }, 1400);

    setTimeout(function(){
        console.log(contador);
        clearInterval(interval);
        Finalizar_juego();
    },25000);
}

function Pintar() {
    var casillas = document.querySelectorAll('.casilla');
    var num = Math.floor(Math.random()*casillas.length)
    casillas[num].innerHTML = '<img onclick="Sumar_punto()" src="topo.jpg" alt=""></img>';
}

function Limpiar_tablero() {
    console.log("Limpio el tablero");
    contador++;
    var casillas = document.querySelectorAll(".casilla");
    casillas.forEach(function(e){
        e.innerHTML = '<img src="hueco.jpg" alt=""></img>';
    });
}

function Finalizar_juego() {
    console.log("Fin del juego");
    var con = document.querySelector('.container')

    con.innerHTML += `<h1> Fin del juego. Tu puntuación ha sido de ${puntuacion}. Para volver a jugar por favor pulse el botón
    <button onclick="recargar()">Que comience el juego</button>`;

    console.log(body);

}

function Sumar_punto() {
    if (contador < 20) {
        console.log("Sumo un punto");
        puntuacion++;
        puntos = document.querySelector('#puntos');
        puntos.innerHTML = ` Puntos: ${puntuacion}`;
    }
}

function recargar(){
    location.reload();
}