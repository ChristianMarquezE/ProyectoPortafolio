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