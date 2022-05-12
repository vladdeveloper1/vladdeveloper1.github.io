document.querySelector('.hamburger').onclick = function() {
    this.classList.toggle('hamburger_activ');
    document.querySelector('.menu').classList.toggle('menu_activ');
    }