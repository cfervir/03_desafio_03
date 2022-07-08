/* Ejercicio 4 */

let bgColor;

/* Versión más verbosa, no sé si esto es lo más correcto.

function cambioTecla(tecla) {
  if (tecla.key.toLowerCase() === 'a') {
    return bgColor = 'magenta';
  } else if (tecla.key.toLowerCase() === 's') {
    return bgColor = 'lime';
  } else if (tecla.key.toLowerCase() === 'd') {
    return bgColor = 'cyan';
  } else {
    return bgColor = '';
  }
};

document.addEventListener('keydown', cambioTecla); */

/* Versión con menos código, pero no sé si es lo más correcto. */

document.addEventListener('keydown', function(tecla) {
  if (tecla.key.toLowerCase() === 'a') {
    return bgColor = 'magenta';
  } else if (tecla.key.toLowerCase() === 's') {
    return bgColor = 'lime';
  } else if (tecla.key.toLowerCase() === 'd') {
    return bgColor = 'cyan';
  } else {
    return bgColor = '';
  }
});

const caja1 = document.getElementById("div1");
const caja2 = document.getElementById("div2");
const caja3 = document.getElementById("div3");
const caja4 = document.getElementById("div4");

caja1.addEventListener("click", () => caja1.style.backgroundColor = bgColor);
caja2.addEventListener("click", () => caja2.style.backgroundColor = bgColor);
caja3.addEventListener("click", () => caja3.style.backgroundColor = bgColor);
caja4.addEventListener("click", () => caja4.style.backgroundColor = bgColor);

/* Está separado ya que esto junto a lo anterior hace que no funcione */