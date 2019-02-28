
var puntuacion = 0;
var contador = 0;

function start_game() {
    setInterval(function () {
        Limpiar_tablero();
        Pintar();
    }, 2000);

}

function Pintar() {
    console.log("Pinto al topillo");
}

function Limpiar_tablero() {
    console.log("Limpio el tablero");
    contador++;
    var casillas = document.querySelectorAll("casilla");

    console.log(contador);
    if (contador > 20) {
        Finalizar_juego();
    }
}

function Finalizar_juego() {
    console.log("Fin del juego");


}

function Sumar_punto() {
    if (contador < 20) {
        console.log("Sumo un punto");
        puntuacion++;
        puntos = document.querySelector('#puntos');
        puntos.innerHTML = `Puntos: ${puntuacion}`;
    }
}