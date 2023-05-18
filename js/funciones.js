var cambiarColorBtn = document.getElementById("cambiarColorBtn");
cambiarColorBtn.addEventListener("click", cambiarColorFondo);

function cambiarColorFondo() {
var colorDeseado = "#94e1ea"; // Color de fondo deseado
document.body.style.backgroundColor = colorDeseado;
}

var cambiarTextoBtn = document.getElementById("cambiarTextoBtn");
    cambiarTextoBtn.addEventListener("click", cambiarTextoElemento);

    function cambiarTextoElemento() {
      var nuevoTexto = "Taylor Swift es la industria musical"; // Cadena predefinida
      var textoElemento = document.getElementById("texto");
      textoElemento.textContent = nuevoTexto;
    }
    var imagen = document.getElementById("imagen");
    var cambiarImagenBtn = document.getElementById("cambiarImagenBtn");
    var restaurarImagenBtn = document.getElementById("restaurarImagenBtn");
    
    var srcOriginal = imagen.src; // Guardar el src original de la imagen

    cambiarImagenBtn.addEventListener("click", function() {
      var nuevaImagen = "imagenes/olv.gif"; // Ruta de la nueva imagen
      imagen.src = nuevaImagen;
    });

    restaurarImagenBtn.addEventListener("click", function() {
      imagen.src = srcOriginal; // Restaurar el src original de la imagen
    });

    var mensaje = document.getElementById("mensaje");
    var ocultarBtn = document.getElementById("ocultarBtn");

    ocultarBtn.addEventListener("click", function() {
      mensaje.style.display = "none";
    });


    function escribirTexto() {
      var div = document.getElementById("miDiv");
      var h1 = document.createElement("h1");
      h1.textContent = "Este texto no lo escribió Moises Santiago Gonzalez Retana, lo escribió JavaScript";
      div.appendChild(h1);
    }

    function eliminarTexto() {
      var div = document.getElementById("miDiv");
      div.innerHTML = ""; // Eliminar todo el contenido del div
    }

// modificar despues 
    var images = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg"
      ];
      
      var currentIndex = 0;
      var imageElement = document.getElementById("image");
      
      function showImage() {
        imageElement.src = images[currentIndex];
      }
      
      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
      }
      
      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
      }
      
      // Mostrar la primera imagen al cargar la página
      showImage();
