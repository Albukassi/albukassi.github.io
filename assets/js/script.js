/* ******* ******* ******* ******* ******* ******* ******* */
/*                      1 - Preloader                      */
/* ******* ******* ******* ******* ******* ******* ******* */

// const preloader = document.querySelector('.preloader');

// preloader.addEventListener('click', function a() {
//     preloader.classList.add('preloader--loaded');
// })
// window.addEventListener('laod', function name() {
//     alert('carregou');
//     preloader.classList.add('preloader--loaded');
// });

/* ******* ******* ******* ******* ******* ******* ******* */
/*                        2 - Header                        */
/* ******* ******* ******* ******* ******* ******* ******* */

let header_button_burguer = document.getElementById('header-button-burguer');
let header_nav = document.getElementById('header-nav');

header_button_burguer.addEventListener('click', () => {
    if (header_button_burguer.classList.contains('header__button-burguer--open')) {
        header_button_burguer.classList.remove('header__button-burguer--open');
        header_button_burguer.classList.add('header__button-burguer--close');
        header_nav.classList.add('header__nav--show');
    } else if (header_button_burguer.classList.contains('header__button-burguer--close')) {
        header_button_burguer.classList.add('header__button-burguer--open');
        header_button_burguer.classList.remove('header__button-burguer--close');
        header_nav.classList.remove('header__nav--show');
    }
});

/* ******* ******* ******* ******* ******* ******* ******* */
/*                    3 - Banner Slider                    */
/* ******* ******* ******* ******* ******* ******* ******* */

$(document).ready(function () {
    $('.banner__content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });
});

/* ******* ******* ******* ******* ******* ******* ******* */
/*                      4 - About Menu                      */
/* ******* ******* ******* ******* ******* ******* ******* */

function alter_about_content(sectionName) {
    const aboutSections = document.querySelectorAll('.about__dynamic__section');
    const aboutSectionLinks = document.querySelectorAll('.about__menu__link');
    let counter = 0;

    aboutSections.forEach(aboutSection => {
        aboutSection.classList.remove('active');
        aboutSectionLinks[counter++].classList.remove('active');
    });

    document.getElementById(sectionName).classList.add('active');
    document.getElementById(sectionName + '-link').classList.add('active');
}

/* ******* ******* ******* ******* ******* ******* ******* */
/*                  5 - Services Carousel                  */
/* ******* ******* ******* ******* ******* ******* ******* */

$(document).ready(function () {
    $('.services__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});