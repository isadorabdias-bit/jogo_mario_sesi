const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = ()=>{
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);
}
// aparecer o tempo em que o o mario ta andando e ver se o tempo para hora que rela no cano
const loop = setInterval(()=>{
    console.log('loop');

// pro cano andar da direita para esquerda 
const pipePosition = pipe.offsetLeft;
// altura que o mario pula pra nao rela no cano
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

// pipePosition <= 120 é que se o mario estiver igual ou menos do que 120 perto do cano ele morre
// pipePosition > 0 é que o cano nao pode estar pra baixo da linha se nao é um buque no jogo
// marioPosition < 80 é que o mairio nao pode ser menor que o cano se nao quando ele pular vai bater e morrer
if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    // quando morrer para as animações
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    // na posiçao que ele morre ele vai ficar
    mario.style.bottom = `${marioPosition}px`;

    // mudar a imagem do mario para a imagem de game over
    // os dois pontos é para sair da pasta e entrar na pasta imagens pa pegar a imagem
    mario.src = '../imagens/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); 
}
}, 10);

document.addEventListener('keydown',jump);


