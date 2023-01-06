export function typeWrite(element) {
  var element = document.querySelector(element)

  const textoArray = element.innerHTML.split("");
  element.innerHTML = " ";

  setInterval(
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        element.innerHTML += letra;
      }, 95 * i);
    }), 500000
  )

  
}