
function Resultado() {
    var results = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 1, 1, 0, 0, 1];
    return results[Math.floor(Math.random() * results.length)];
}

function Partido() {
    var equipos = ['Barcelona', 'Madrid', 'Atético de Madrid', 'Getafe', 'Real Sociedad', 'Betis', 'Granada', 'Tenerife',
        'Villareal', 'Valencia', 'Las Palmas', 'Alcorcón'];

    var e1 = equipos[Math.floor(Math.random() * equipos.length)];
    var e2 = equipos[Math.floor(Math.random() * equipos.length)];

    if (e1 != e2) {
        var partidito = {
            equipo1: e1,
            resultado1: Resultado(),
            equipo2: e2,
            resultado2: Resultado()
        };
    }
    else {
        while (e1 == e2) {
            e1 = equipos[Math.floor(Math.random() * equipos.length)];
            e2 = equipos[Math.floor(Math.random() * equipos.length)];
        }
        var partidito = {
            equipo1: e1,
            resultado1: Resultado(),
            equipo2: e2,
            resultado2: Resultado()
        };
    }
    var primero = document.querySelector('#e1');
    var segundo = document.querySelector('#e2');
    var resultado = document.querySelector('#r');
    primero.innerHTML = partidito.equipo1;
    segundo.innerHTML = partidito.equipo2;
    resultado.innerHTML = `${partidito.resultado1} - ${partidito.resultado2}`
}