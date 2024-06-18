const trilho = document.getElementById('trilho')
const body = document.querySelector('body')
const modelP = document.getElementById('model-p')
const rodape = document.getElementById('rodape')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    modelP.classList.toggle('dark-mode')
    rodape.classList.toggle('dark-mode')
    
});

const abrirMenu = document.getElementById('btn-menu')
const menu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')

abrirMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

