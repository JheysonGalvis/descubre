let nombre = prompt("Hola, ¿Cómo te llamas?")
alert("Gracias por jugar con nosotros " + nombre)

const palabras = ["casco_de_seguridad", "guantes_de_seguridad", "gafas_de_seguridad", "tapones_para_los_oidos", "mascarillas_respiratorias", "chalecos_de_seguridad", "arnes_de_seguridad"];
const palabraOculta = palabras[Math.floor(Math.random() * palabras.length)]; // Selecciona una palabra aleatoria de la lista

let letrasAdivinadas = [];

// Actualiza el campo de la palabra oculta para que muestre la palabra oculta con las letras adivinadas hasta ahora y asteriscos para las letras no adivinadas
function actualizarPalabraOculta() {
  let palabraOcultaMostrar = "";
  for (let i = 0; i < palabraOculta.length; i++) {
    if (letrasAdivinadas.includes(palabraOculta[i])) {
      palabraOcultaMostrar += palabraOculta[i];
    } else {
      palabraOcultaMostrar += "*";
    }
  }
  document.getElementById("palabraOculta").textContent = palabraOcultaMostrar;
}

// Verifica si la letra ingresada por el usuario es parte de la palabra oculta y actualiza la lista de letras adivinadas y la palabra encontrada en el HTML en consecuencia
function adivinarLetra() {
  let letraIngresada = document.getElementById("letra").value.toLowerCase();
  if (palabraOculta.includes(letraIngresada) && !letrasAdivinadas.includes(letraIngresada)) {
    letrasAdivinadas.push(letraIngresada);
  }
  actualizarPalabraOculta();
  document.getElementById("letra").value = ""; // Limpiar el campo de texto de la letra
  if (!palabraOculta.split("").some(letra => !letrasAdivinadas.includes(letra))) {
    document.getElementById("palabraEncontrada").textContent = palabraOculta;
  }
}

// Reinicia el juego para jugar otra partida
function reiniciarJuego() {
  letrasAdivinadas = [];
  palabraOculta = palabras[Math.floor(Math.random() * palabras.length)];
  actualizarPalabraOculta();
  document.getElementById("palabraEncontrada").textContent = "";
}

// Inicializa el juego al cargar la página
actualizarPalabraOculta();
document.getElementById("adivinarLetra").addEventListener("click", adivinarLetra);
document.getElementById("reiniciarJuego").addEventListener("click", reiniciarJuego);