const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');
const socialIcons = document.querySelector('.social-icons2');
const headerTitle = document.querySelector('.header-title'); // Agrega esta línea
const coleccionesLink = document.querySelector('.colecciones-link');
const menu = document.querySelector('.colecciones-content');
const video = document.getElementById('bg-video');
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', () => {
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
    if (
      !menuToggle.contains(event.target) &&
      !navContainer.contains(event.target)
    ) {
      navContainer.classList.remove('show');
      socialIcons.classList.remove('show');
    }
  });

  coleccionesLink.addEventListener('click', function (event) {
    // Verificar si estamos en vista móvil o de escritorio
    const isMobile = window.innerWidth <= 768; // Ajusta este valor según tus necesidades

    if (isMobile) {
      // En móvil, abrir el menú y redirigir en el segundo clic
      event.preventDefault(); // Evitar la redirección

      if (!isMenuOpen) {
        // Si el menú no está abierto, abrirlo
        menu.style.display = 'block';
        isMenuOpen = true;
      } else {
        // Redirigir si el menú ya está abierto
        const currentUrl = window.location.href;
        const mainPageUrl = 'https://josefinaorrego.cl/'; // Cambia esto a la URL de tu página principal
        const mainPageUrl3 = 'https://josefinaorrego.cl/#';
        const mainPageUrl1 = 'https://josefinaorrego.cl/index.html';
        const mainPageUrl2 = 'https://josefinaorrego.cl/index.html#';

        const redirectPageUrl =
          'https://josefinaorrego.cl/pages/colecciones.html'; // Cambia esto a la URL de la otra página

        // Redirigir según la página actual
        if (
          currentUrl === mainPageUrl ||
          currentUrl === mainPageUrl1 ||
          currentUrl === mainPageUrl2 ||
          currentUrl === mainPageUrl3
        ) {
          window.location.href = redirectPageUrl; // Redirigir a la otra página si estamos en la página principal
        } else {
          window.location.href = 'colecciones.html'; // Redirigir a la página de colecciones si estamos en otra página
        }
      }
    } else {
      // En escritorio, abrir el menú y redirigir directamente
      event.preventDefault(); // Evitar la redirección

      // Abrir el menú
      menu.style.display = 'block';
      isMenuOpen = true;

      // Redirigir a la página de colecciones
      const redirectPageUrl =
        'https://josefinaorrego.cl/pages/colecciones.html'; // Cambia esto a la URL de la otra página
      window.location.href = redirectPageUrl; // Redirigir a la página de colecciones
    }
  });
  // Cerrar el menú si se hace clic fuera de él solo en vista móvil
  document.addEventListener('click', function (event) {
    const isMobile = window.innerWidth <= 768; // Ajusta este valor según tus necesidades

    if (
      isMobile &&
      !menu.contains(event.target) &&
      event.target !== coleccionesLink
    ) {
      menu.style.display = 'none';
      isMenuOpen = false;
    }
  });
  // Opcional: ocultar las colecciones cuando se hace clic fuera de ellas
  document.addEventListener('click', (event) => {
    if (
      !coleccionesLink.contains(event.target) &&
      !coleccionesLink.contains(event.target)
    ) {
      menu.style.display = 'none';
    }
  });
});

// Detectar elementos al hacer scroll
const observador = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

// Observar todos los elementos con la clase fade-in
document.querySelectorAll('.fade-in').forEach((el) => observador.observe(el));

// Función para ajustar el estado de mute del video
function adjustVideoMute() {
  if (window.innerWidth <= 768) {
    // Si el ancho de la ventana es menor o igual a 768px (móvil)
    video.muted = true; // Silenciar el video
  } else {
    video.muted = false; // Activar el sonido del video
  }
}

// Ajustar el mute al cargar la página
adjustVideoMute();

// Ajustar el mute al redimensionar la ventana
window.addEventListener('resize', adjustVideoMute);

// Asegúrate de que el video comience en silencio
video.muted = true; // Silenciar el video por defecto

// Función para ajustar el estado de mute y reproducción del video
function adjustVideoMute(entry) {
  if (entry && entry.isIntersecting) {
    // Verifica que entry sea válido
    if (window.innerWidth > 768) {
      // Solo activar sonido en escritorio
      video.muted = false; // Activar el sonido del video cuando está visible
      video.play().catch((error) => {
        // Manejar el error si no se puede reproducir el video
        console.error('Error al intentar reproducir el video:', error);
      });
    } else {
      video.play().catch((error) => {
        // Manejar el error si no se puede reproducir el video
        console.error('Error al intentar reproducir el video:', error);
      });
    }
  } else if (entry && window.innerWidth > 768) {
    video.muted = true; // Silenciar el video cuando no está visible
  }
}

// Crear el observador solo una vez
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    adjustVideoMute(entry);
  });
});

// Observar el video
observer.observe(video);

// Ajustar el mute al redimensionar la ventana
window.addEventListener('resize', () => {
  video.muted = window.innerWidth <= 768; // Silenciar el video en móvil
});
