let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


menu.onclick = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween:20,
    grabCursos:true,
    loop:true,
    pagination: {

      el: ".swiper-pagination",
      clickable:true,
    },
     breakpoints: {
        640: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    grabCursos:true,
    loop:true,
    pagination: {

      el: ".swiper-pagination",
      clickable:true,
    },
     breakpoints: {
        640: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });