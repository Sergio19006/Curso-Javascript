function TirarDado(){
    var dado = document.getElementById('Dado'); 
    var num = Math.floor(Math.random()*6)+1;
    dado.innerHTML = num;
  }