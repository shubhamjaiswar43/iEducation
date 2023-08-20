const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-h-resp');
    navList.classList.toggle('d-none');
    rightNav.classList.toggle('d-none');
})