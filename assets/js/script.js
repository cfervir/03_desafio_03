/* Ejercicio 3.1 -> Modifica la función

function pintar(){
  ele = document.getElementById("ele1");
  ele.style.backgroundColor = 'yellow';
}
ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

*/

/* Resultado 3.1

ele = document.getElementById("ele1")
  function pintar(){
    ele.style.backgroundColor = 'yellow';
  };

ele.addEventListener("click", pintar); */

/* Resultaddo 3.2 */ 

let ele = document.getElementById("ele1");

function pintar(miColor = 'green') {
  return ele.style.backgroundColor = miColor;
}

ele.addEventListener("click", function(){ pintar('yellow') });