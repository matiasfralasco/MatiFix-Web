const texto = "Tu PC, Más Rápida. 🚀"; // El texto que quieres que aparezca
const velocidad = 100; // Velocidad en milisegundos
const elemento = document.getElementById("titulo-maquina");
let i = 0;

function escribir() {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
    }
}

// Arrancar la animación cuando carga la página
window.onload = escribir;
// --- SCROLL REVEAL ---
// Detectar cuando un elemento entra en la pantalla
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar'); // Le ponemos la clase que lo hace visible
        }
    });
});

// Seleccionar todos los elementos que queremos animar
const elementosOcultos = document.querySelectorAll('.oculto');
elementosOcultos.forEach((el) => observador.observe(el));