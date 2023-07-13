window.addEventListener("scroll", function () {
  if (window.innerWidth > 666 || window.innerWidth < 320) {
    var header = document.querySelector("header");
    var headerContainer = document.querySelector(".header__container");
    var headerDropdown = document.querySelector(".header__dropdown");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.opacity = "0.8";
      headerContainer.style.padding = "0 0 0 1.75rem";
      headerDropdown.style.top = "2.25rem";
    } else {
      header.style.opacity = "1";
      headerContainer.style.padding = "1.25rem 0 1.25rem 1.75rem";
      headerDropdown.style.top = "4.75rem";
    }
  }
});

$(document).ready(function () {
  function openPopup() {
    if ($("#recentForm").valid()) {
      // Проверка валидности формы
      $.fancybox.defaults.hideScrollbar = false;
      $.fancybox.open({
        src: "#successPopup",
        type: "inline",
      });
    }
  }

  $("#recentForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
    },
    submitHandler: function (form) {
      openPopup();
    },
  });

  $(".popUp__right__button").click(function () {
    $.fancybox.close();
  });

  $(".signUp__form__button--mobile").click(function () {
    openPopup();
  });
});

var element1 = document.querySelector(".burger__menu--element:nth-child(1)");
var element2 = document.querySelector(".burger__menu--element:nth-child(2)");
var element3 = document.querySelector(".burger__menu--element:nth-child(3)");
var burgerList = document.querySelector(".burger__list");
var burgerMenu = document.querySelector(".burger__menu");

var isClicked = false;

burgerMenu.addEventListener("click", function () {
  if (!isClicked) {
    document.documentElement.style.overflow = "hidden";

    element1.style.transform = "translateY(2px) rotate(45deg)";
    element2.style.transform = "translateY(-3px) rotate(-45deg)";
    element3.style.opacity = "0";
    burgerList.style.transform = "translateX(0)";
  } else {
    document.documentElement.style.overflow = "";

    element1.style.transform = "translateY(0) rotate(0)";
    element2.style.transform = "translateY(0) rotate(0)";
    element3.style.opacity = "1";
    burgerList.style.transform = "translateX(55.6667rem)";
  }

  isClicked = !isClicked;
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
