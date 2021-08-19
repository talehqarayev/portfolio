window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuLink = document.querySelectorAll('.menu_link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });


  menuLink.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });

  
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn("slow");
  } 
  else {
      $(".pageup").fadeOut();
        }
});

});



/* $("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
  });  */


/* const hamburger = document.querySelector(".hamburger"),
menu = document.querySelector(".menu"),
menuItem = document.querySelector(".menu_link"),
closeBtn = document.querySelector(".menu_close");

hamburger.addEventListener("click", function() {
  menu.classList.add("menu_active");
});

  menuItem.addEventListener("click", function() {
  menu.classList.remove("menu_active");
}); 

closeBtn.addEventListener("click", function() {
  menu.classList.remove("menu_active");

});

const percents = document.querySelectorAll(".skills_rating-percent"),
    lines = document.querySelectorAll(".skills_rating-line span");

    percents.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    }); */


