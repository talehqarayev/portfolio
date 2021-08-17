      window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    });




 
 /*
    const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeBtn = document.querySelector(".menu_close"),
    menuItem = document.querySelector(".menu_item");

hamburger.addEventListener("click", function() {
  menu.classList.add("menu_active");
});

closeBtn.addEventListener("click", function() {
  menu.classList.remove("menu_active");

});

  menuItem.addEventListener("click", function() {
  menu.classList.remove("menu_active");
}); 

const percents = document.querySelectorAll(".skills_rating-percent"),
    lines = document.querySelectorAll(".skills_rating-line span");

    percents.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
    });

    */