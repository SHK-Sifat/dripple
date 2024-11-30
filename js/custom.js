$(function(){
    $('.service_item').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:2000,
        smartSpeed:500,
        dots:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:3,
             
            },
            1000:{
                items:5,
                
            },
            1200:{
                items:5,
                
            }
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});