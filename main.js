const menuBtn = document.querySelector(".menu__btn");
const navLinksDiv = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links a");

menuBtn.addEventListener("click", () => {
  if (navLinksDiv.classList.contains("nav--closed")) {
    navLinksDiv.classList.remove("nav--closed");
    navLinksDiv.classList.add("nav--opened");
  } else {
    navLinksDiv.classList.remove("nav--opened");
    navLinksDiv.classList.add("nav--closed");
  }
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    navLinksDiv.classList.remove("nav--opened");
    navLinksDiv.classList.add("nav--closed");
  })
);

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  afterReveal: function (el) {
    el.style.transform = "";
    el.style.transition = "";
  },
};

ScrollReveal().reveal(".header__img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__topContent", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__title", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".destinations__container > div", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
