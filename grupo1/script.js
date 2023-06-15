window.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.menu-toggle-button');
    const menuItems = document.querySelector('.menu-items');
    
    menuButton.addEventListener('click', () => {
      menuItems.classList.toggle('show-menu');
    });
  });
// Obtener elementos del DOM
var menuButton = document.getElementById('menu-button');
var menuItems = document.querySelector('.menu-items');

// Agregar evento de clic al botón de menú
menuButton.addEventListener('click', function() {
  menuItems.classList.toggle('active');

  // Ajustar la posición del menú desplegable
  var rect = menuButton.getBoundingClientRect();
  menuItems.style.left = rect.left + '10px';
  menuItems.style.top = rect.bottom + '10px';
});
$(document).ready(function() {
  $('#carousel').slick({
    autoplay: true, // Autoreproducción del carrusel
    dots: true, // Muestra los puntos de navegación
    arrows: false, // Oculta las flechas de navegación
    infinite: true, // Reproducción infinita
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de imágenes visibles a la vez
    slidesToScroll: 1 // Número de imágenes que se desplazan al avanzar
  });
});
