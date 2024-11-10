// Detectar elementos al hacer scroll
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observar todos los elementos con la clase fade-in
document.querySelectorAll('.fade-in').forEach((el) => observador.observe(el));

const menuToggle = document.querySelector('.menu-toggle'); // Solo se declara una vez
const navContainer = document.querySelector('.nav-container'); // Solo se declara una vez
const coleccionesButton = document.getElementById('colecciones-button');
const coleccionesContent = document.querySelector('.colecciones-content');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
});

coleccionesButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar la redirección por defecto
    if (coleccionesContent.style.display === 'block') {
        // Si las colecciones están visibles, redirigir a colecciones.html
        window.location.href = 'colecciones.html';
    } else {
        // Si no están visibles, mostrarlas
        coleccionesContent.style.display = 'block';
    }
});

// Opcional: ocultar las colecciones cuando se hace clic fuera de ellas
document.addEventListener('click', (event) => {
    if (!coleccionesButton.contains(event.target) && !coleccionesContent.contains(event.target)) {
        coleccionesContent.style.display = 'none';
    }
});