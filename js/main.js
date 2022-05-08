function validarEmail(valor) {
  re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(valor.toLowerCase())) {
    const columnas = document.querySelectorAll(".invi");
    columnas.forEach((columna, indice) => {
      cambiarColumna(indice);
      function cambiarColumna(indice) {
        columnas[indice].classList.remove("invi");
        columnas[indice].classList.add("visi");
      }
    });
  } else;
}

const volverIniv1 = document.getElementById("correo");
volverIniv1.addEventListener("focus", modifyClas, false);
function modifyClas() {
  const buscInvi = document.querySelectorAll(".visi");
  buscInvi.forEach((columna, indice) => {
    cambiarColumna(indice);
    function cambiarColumna(indice) {
      buscInvi[indice].classList.remove("visi");
      buscInvi[indice].classList.add("invi");
      /*volverIniv1.value = "";*/
    }
  });
}
