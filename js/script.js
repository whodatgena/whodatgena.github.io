let screen = document.querySelector('.screen');
let aboutmetitle = document.querySelector('.aboutme-title');
let aboutmetext = document.querySelector('.aboutme-text');
let touch = document.querySelector('.touch');
let back = document.querySelector('.back');
let scrol = document.querySelector('.scroll');
let photo = document.querySelector('.photo');
touch.addEventListener('click', function(){
    aboutmetitle.classList.toggle('active');
    aboutmetext.classList.toggle('active');
    touch.classList.toggle('active');
    back.classList.toggle('active');
    scrol.classList.toggle('active');
    photo.classList.toggle('active');
    photo.classList.remove('default');
    scrol.classList.remove('default');
    aboutmetitle.classList.remove('default');
    aboutmetext.classList.remove('default');
    touch.classList.remove('default');
    back.classList.remove('default');
})

back.addEventListener('click', function(){
    aboutmetitle.classList.toggle('default');
    aboutmetext.classList.toggle('default');
    touch.classList.toggle('default');
    back.classList.toggle('default');
    scrol.classList.toggle('default');
    photo.classList.toggle('default');
    photo.classList.remove('active');
    scrol.classList.remove('active');
    aboutmetitle.classList.remove('active');
    aboutmetext.classList.remove('active');
    touch.classList.remove('active');
    back.classList.remove('active');
  })

  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

let burger = document.querySelector('.burger-menu');
let burger2 = document.querySelector('.burger-menu.active');
let string1 = document.querySelector('.string-1');
let string2 = document.querySelector('.string-2');
let string3 = document.querySelector('.string-3');
let burgerMenu = document.querySelector('.burger-menu-container');
let a = 1;
burger.onclick = function(){
  string1.classList.toggle('active');
  string2.classList.toggle('active');
  string3.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  a = a + 1;
}