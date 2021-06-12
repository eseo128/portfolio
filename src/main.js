'use strict';

//navbar 올라가면 투명, 내려가면 navbar-dark 클래스 추가되어 배경색 입혀짐.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`)

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});