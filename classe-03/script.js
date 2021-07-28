const imagensGaleria = document.querySelectorAll('.container__galery img');
const modal = document.querySelector('.modal');
const imagemModal = document.querySelector('.modal img');
const linkModal = document.querySelector('.modal a');

imagensGaleria.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        abrirModal(event.target.src);
    });
});

function abrirModal(src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
    linkModal.href = src;
}

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

linkModal.addEventListener('click', (event) => {
    event.stopPropagation();
});