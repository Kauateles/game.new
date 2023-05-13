const btnMobile = document.getElementById('btn-mobile');
// declaramento a veriavel com o CONST 

function toggleMenu(event) {
    if (event.type === 'touchstart') event.prentDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'Fechar Menu');
        if(active) {
            event.courrentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            even.currentTarget.setAttribute('aria-label', 'Abrir menu');
        }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)