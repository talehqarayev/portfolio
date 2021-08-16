const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeBtn = document.querySelector(".menu_close");

hamburger.addEventListener("click", function() {
    menu.classList.add("menu_active");
});

closeBtn.addEventListener("click", function() {
    menu.classList.remove("menu_active");

});

const percents = document.querySelectorAll(".skills_rating-percent"),
      lines = document.querySelectorAll(".skills_rating-line span");

      percents.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
      });