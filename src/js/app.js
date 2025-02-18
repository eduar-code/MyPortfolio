document.addEventListener('DOMContentLoaded', function () {
    navFixed();
    eventListeners();
    darkMode();
    //scrollNav();
});


function navFixed() {
    const navigationbar = document.querySelector('.navigationbar');
    const info = document.querySelector('.info');
    const photo = document.querySelector('.photo');

    document.addEventListener('scroll', function () {
        if (info.getBoundingClientRect().top < 1) {
            navigationbar.classList.add('fixed');
            photo.classList.add('disabled_photo');
            //photo.classList.remove('enabled_photo');
        } else {
            navigationbar.classList.remove('fixed');
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
    const navegacion = document.querySelector('.navigationbar-content');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }

    //o una mas corta 
    //navegacion.classList.toggle('mostrar');
}

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');


    if (localStorage.getItem('modo-oscuro') === 'true') {
        document.body.classList.add('dark-mode');
      } else if (localStorage.getItem('modo-oscuro') === 'false') {
        document.body.classList.remove('dark-mode');
      } else {
//
    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

    prefiereDarkMode.addEventListener('change', function () {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        //Para que el modo elegido se quede guardado en local-storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('modo-oscuro', 'true');
        } else {
            localStorage.setItem('modo-oscuro', 'false');
        }
    });
}