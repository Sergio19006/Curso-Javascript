
var teclas = document.querySelectorAll('.tecla');

var notas = ['https://manzdev.github.io/piano-keys/c1.mp3?', 'https://manzdev.github.io/piano-keys/c1s.mp3?',
    'https://manzdev.github.io/piano-keys/d1.mp3?', 'https://manzdev.github.io/piano-keys/d1s.mp3?', 'https://manzdev.github.io/piano-keys/e1.mp3?'
    , 'https://manzdev.github.io/piano-keys/f1.mp3?', 'https://manzdev.github.io/piano-keys/f1s.mp3?',
    'https://manzdev.github.io/piano-keys/g1.mp3?', 'https://manzdev.github.io/piano-keys/g1s.mp3?',
    'https://manzdev.github.io/piano-keys/a1.mp3?', 'https://manzdev.github.io/piano-keys/a1s.mp3?', 'https://manzdev.github.io/piano-keys/b1.mp3?',
    'https://manzdev.github.io/piano-keys/c21.mp3?']


teclas.forEach(function (e) {
    e.addEventListener('click', tocar.bind(e));
});


function tocar(e) {
    console.log(e.path[0].id);
    var audio = new Audio(notas[e.path[0].id]);
    audio.play();
}