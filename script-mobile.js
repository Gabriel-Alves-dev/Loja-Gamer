const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Mostrar sidebar e overlay
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('visible');
    overlay.classList.add('visible');
});

// Ocultar sidebar e overlay ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
});

// Ocultar sidebar e overlay ao clicar fora da sidebar
overlay.addEventListener('click', () => {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
});

