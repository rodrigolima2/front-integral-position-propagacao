const inputSenha = document.querySelector('.input--senha input');
const inputEye = document.querySelector('.input--senha img');


inputEye.src = 'assets/olho-fechado.svg';

inputEye.addEventListener('click', olhoAberto);

function olhoAberto() {
    inputEye.src = 'assets/olho-aberto.svg';
    inputSenha.type = 'text';
    inputEye.removeEventListener('click', olhoAberto);
    inputEye.addEventListener('click', olhoFechado);

}

function olhoFechado() {
    inputEye.src = 'assets/olho-fechado.svg';
    inputSenha.type = 'password';
    inputEye.removeEventListener('click', olhoFechado);
    inputEye.addEventListener('click', olhoAberto);
}