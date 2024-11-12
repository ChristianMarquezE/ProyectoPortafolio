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

const menuToggle = document.querySelector('.menu-toggle'); 
const navContainer = document.querySelector('.nav-container'); 
const coleccionesButton = document.querySelector('.colecciones-link');
const coleccionesContent = document.querySelector('.colecciones-content');
const socialIcons = document.querySelector('.social-icons2'); 
const headerTitle = document.querySelector('.header-title'); // Agrega esta línea


menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
    socialIcons.classList.toggle('show'); // Alternar la visibilidad de los íconos de redes sociales
    if (navContainer.classList.contains('show')) {
        headerTitle.style.opacity = '1'; // Muestra el header-title al abrir
    } else {
        headerTitle.style.opacity = '0'; // Oculta el header-title al cerrar
    }
});

// Ocultar los íconos de redes sociales cuando se hace clic fuera del menú
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navContainer.contains(event.target)) {
        navContainer.classList.remove('show');
        socialIcons.classList.remove('show');
    }
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