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

//navbar__menu 클릭 시 선택한 메뉴로 스무스하게 스크롤링

const nabarMenu = document.querySelector('.navbar__menu');
nabarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//Home 내 "Contact Me" 클릭 시 선택한 메뉴로 스무스하게 스크롤링

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

//윈도우 스크롤이 내려갈 수록 점점 투명하게 만들기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// 유틸리티 함수: 스크롤링 펑션으로 간단하게 주기
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}