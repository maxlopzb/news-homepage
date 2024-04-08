const openIcon = document.querySelector('.menu-open-icon');
const closeIcon = document.querySelector('.menu-close-icon');
const mobileMenu = document.querySelector('.mobile-menu-container-close');
const mobileLayer = document.querySelector('.mobile-bg-layer-hide');


openIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-container-close');
    mobileMenu.classList.add('mobile-menu-container');
    mobileLayer.classList.add('mobile-bg-layer');
    mobileLayer.classList.remove('mobile-bg-layer-hide');
})

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu-container-close');
    mobileMenu.classList.remove('mobile-menu-container');
    mobileLayer.classList.remove('mobile-bg-layer');
    mobileLayer.classList.add('mobile-bg-layer-hide');
})
