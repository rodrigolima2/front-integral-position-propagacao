const telegramIcon = document.querySelector('.telegram-icon');
const telegramIconCard = document.querySelector('.telegram-icon__card');

telegramIcon.addEventListener('click', abrirCard);

function abrirCard() {
    telegramIconCard.style.display = 'flex';
    telegramIcon.removeEventListener('click', abrirCard);
    telegramIcon.addEventListener('click', fecharCard);
}

function fecharCard() {
    telegramIconCard.style.display = 'none';
    telegramIcon.removeEventListener('click', fecharCard);
    telegramIcon.addEventListener('click', abrirCard);
}