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