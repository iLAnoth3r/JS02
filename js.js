//EJERCICIO 1

const borde = document.querySelector("#imagen");

borde.addEventListener("click", function (e) {
  if (borde.style.border == "none") {
    borde.style.border = "2px solid red";
  } else {
    borde.style.border = "none";
  }
});

//EJERCICIO 2
const boton = document.querySelector("#verificar");

boton.addEventListener("click", function (e) {
  const respuesta = document.querySelector("#parrafo");
  const sticker1 = document.querySelector("#input1").value;
  const sticker2 = document.querySelector("#input2").value;
  const sticker3 = document.querySelector("#input3").value;
  const suma = +sticker1 + +sticker2 + +sticker3;

  if (suma > 10) {
    respuesta.innerHTML = "Llevas demasiado stickers";
  } else {
    respuesta.innerHTML = "Llevas " + suma + " stickers";
  }
});

//EJERCICIO 3
const boton2 = document.querySelector("#ingresar");

boton2.addEventListener("click", function (e) {
  const uno = document.querySelector("#select1").value;
  const dos = document.querySelector("#select2").value;
  const tres = document.querySelector("#select3").value;
  const respuesta2 = document.querySelector("#parrafo2");

  if (uno == 9 && dos == 1 && tres == 1) {
    respuesta2.innerHTML = "Password 1 correcto";
  } else if (uno == 7 && dos == 1 && tres == 4) {
    respuesta2.innerHTML = "Password 2 correcto";
  } else {
    respuesta2.innerHTML = "Password incorrecto";
  }
});
