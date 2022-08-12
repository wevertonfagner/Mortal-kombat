const scorpion = document.querySelector('.scorpion');
const pedra = document.querySelector('.rocha');
const dragao = document.querySelector('.dragao');

const pular = () => {
    scorpion.classList.add('pular');
    setTimeout(() => {
        scorpion.classList.remove('pular');
    }, 980)
}

const trocarImg = () => {
    scorpion.src = './img/pulando.gif';
    setTimeout(() => {
        scorpion.src = './img/caminhando.gif';
    }, 980)
}

const loop = setInterval(() => {
    const posicaoPedra = pedra.offsetLeft;
    const posicaoScorpion = +window.getComputedStyle(scorpion).bottom.replace('px', '');
    
    if (posicaoPedra <= 180 && posicaoPedra > 0 && posicaoScorpion < 150) {
        pedra.style.animation = 'none';
        pedra.style.left = `${posicaoPedra}px`

        clearInterval(loop);

        scorpion.src = './img/tonto.gif'
        document.addEventListener('keydown', function() {
            this.location.reload()
        }) 
    }
}, 10);

 

document.addEventListener('keydown', pular);
document.addEventListener('keydown', trocarImg);