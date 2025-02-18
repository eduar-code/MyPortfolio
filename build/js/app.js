document.addEventListener('DOMContentLoaded', function () {
    navFixed();
    eventListeners();
    //scrollNav();
});


function navFixed() {
    const header = document.querySelector('.header');
    const info = document.querySelector('.info');
    const photo = document.querySelector('.photo');

    document.addEventListener('scroll', function () {
        if (info.getBoundingClientRect().top < 1) {
            header.classList.add('fixed');
            photo.classList.add('disabled_photo');
            //photo.classList.remove('enabled_photo');
        } else {
            header.classList.remove('fixed');
            photo.classList.remove('disabled_photo');
            //photo.classList.add('enabled_photo');
        }
    })
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);

}

function navegacionResponsive() {
    const navegacion = document.querySelector('.nav-main');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }

    //o una mas corta 
    //navegacion.classList.toggle('mostrar');
}