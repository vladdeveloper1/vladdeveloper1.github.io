window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');
    let menuItem = document.querySelectorAll('.menu_item');
    
    hamburger.onclick = function () {
        this.classList.toggle('hamburger_activ');
        menu.classList.toggle('menu_activ');
    }

    menuItem.forEach(item => {
        item.onclick = () => {
            hamburger.classList.toggle('hamburger_activ');
            menu.classList.toggle('menu_activ');
        }
    })

})