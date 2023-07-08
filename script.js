function toggleClasses(element, classToRemove, classToAdd) {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var headerLogo = document.querySelector("#header__logo");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    toggleClasses(headerLogo, "navigation__logo", "scrolling");
    header.style.opacity = "0.8";
  } else {
    toggleClasses(headerLogo, "scrolling", "navigation__logo");
    header.style.opacity = "1";
  }
});

$(document).ready(function () {
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
      $.fancybox.defaults.hideScrollbar = false;
      $.fancybox.open({
        src: "#successPopup",
        type: "inline",
      });
    },
  });

  $(".popUp__right__button").click(function () {
    $.fancybox.close();
  });
});
