// Obtener elementos del modal
const modal = document.getElementById("modal");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrar = document.querySelector(".cerrar");

// Seleccionar todas las imágenes dentro de los divs con clase "famoso"
const imagenes = document.querySelectorAll(".famoso img");

// Recorremos todas las imágenes
imagenes.forEach(imagen => {
  imagen.addEventListener("click", () => {
    modal.style.display = "block";        // Mostrar el modal
    imagenAmpliada.src = imagen.src;      // Copiar la imagen al modal
  });
});

// Al hacer clic en la "X", cerrar
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Al hacer clic fuera de la imagen, cerrar
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
