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


let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

  btn.onclick =() =>{
  let color = btn.getElementsByClassName.background;
  document.querySelector(':root').style.setProperty('--main-color',color);
}

});


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