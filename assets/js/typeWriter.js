function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";

    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      },  95 * i);
    });
}

const text = document.querySelector('.typewrite');
typeWrite(text);
