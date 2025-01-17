let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Atualiza o slider para mostrar o item ativo
function setSlider() {
    // Remove a classe active do item antigo
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    // Atualiza o indicador visual (ponto e número)
    let dotOld = indicator.querySelector('ul li.active');
    if (dotOld) {
        dotOld.classList.remove('active');
    }

    // Adiciona a classe active ao ponto atual
    dots[active].classList.add('active');

    // Atualiza o número no indicador
    indicator.querySelector('.number').innerText = '0' + (active + 1);
}

// Navegar para o próximo item
nextButton.addEventListener('click', () => {
    list.style.setProperty('--calculation', 1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
});

// Navegar para o item anterior
prevButton.addEventListener('click', () => {
    list.style.setProperty('--calculation', -1);
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
});
