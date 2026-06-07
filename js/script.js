// Obtención de elementos del DOM
const navbar = document.getElementById('main-navbar');
const hamburgerToggle = document.getElementById('hamburger-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// 1. CONTROL DE SCROLL (Cambia el fondo del header y muestra el logo en desktop)
window.addEventListener('scroll', () => {
    if (window.scrollY > 5) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. DETECCIÓN DE INTERRUPTOR DE MENÚ MÓVIL
function toggleMenu() {
    hamburgerToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    
    // Evita el scroll del cuerpo de la web de fondo si el menú está desplegado
    if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Evento click para la hamburguesa
hamburgerToggle.addEventListener('click', toggleMenu);

// Cierre automático del menú al seleccionar alguna opción
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});


// CONTADOR DE CARACTERES PARA EL FORMULARIO DE CONTACTO
const messageTextArea = document.getElementById('form-message');
const messageCounter = document.getElementById('message-counter');

if (messageTextArea && messageCounter) {
    messageTextArea.addEventListener('input', (e) => {
        const currentLength = e.target.value.length;
        messageCounter.textContent = `${currentLength}/500`;
    });
}