let linkGlav = document.querySelector('.linkGlav');
let linkAboutme = document.querySelector('.linkAboutme');
let linkContent = document.querySelector('.linkContent');
let linkContact = document.querySelector('.linkContact');
const screenWidth = window.screen.width

jQuery(document).ready(function() {
    var btn = $('#button');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '300');
     });
  });

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass("lock");
  });
});

linkGlav.addEventListener("click", () => {
  $('.header__burger, .header__menu').removeClass('active');
  $('body').removeClass("lock");
  window.scroll(0, 0);
});

linkAboutme.addEventListener("click", () => {
  if(screenWidth < 767) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass("lock");
    window.scroll(0, 600);
  } else {
    window.scroll(0, 900);
  }
});


linkContent.addEventListener("click", () => {
  if(screenWidth < 767) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass("lock");
    window.scroll(0, 1200);
  } else {
    window.scroll(0, 1500);
  }
});

linkContact.addEventListener("click", () => {
  if(screenWidth < 767) {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass("lock");
    window.scroll(0, 1800);
  } else {
    window.scroll(0, 1800);
  }
});
