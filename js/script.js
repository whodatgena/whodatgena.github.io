const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

let tabs = document.querySelectorAll('.tabs-nav');
let tabsItem = document.querySelectorAll('.tabs-item');

tabs.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabs.forEach(function(btn){ btn.classList.remove('tabs-nav-active')});
    e.currentTarget.classList.add('tabs-nav-active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active');
  });
});

new Accordion('.accordion-container');

let menubtn = document.querySelector('.burger-icon');
let menu = document.querySelector('.burger-nav');
let x = document.querySelector('.x');
menubtn.addEventListener('click', function(){
  menu.classList.toggle('active');
})

x.addEventListener('click', function(){
  menu.classList.toggle('active');
})

let search = document.querySelector('.header-search-link');
let searchfill = document.querySelector('.search-fill');
let searchicon = document.querySelector('.header-search');
let searchicon2 = document.querySelector('.search-icon-2');
search.addEventListener('click', function(){
  searchfill.classList.toggle('active');
})

search.addEventListener('click', function(){
  searchicon.classList.toggle('active');
})

searchicon2.addEventListener('click', function(){
  searchfill.classList.toggle('active');
})