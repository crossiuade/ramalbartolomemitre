const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Cuando el usuario hace clic en la hamburguesa, activa o desactiva la clase .show
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});