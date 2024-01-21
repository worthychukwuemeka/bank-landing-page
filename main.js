// Get references to HTML elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for menu button click
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links
  navLinks.classList.toggle("open");

  // Check if navigation links are open
  const isOpen = navLinks.classList.contains("open");

  // Change the menu button icon based on whether navigation links are open
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

// Event listener for navigation links click
navLinks.addEventListener("click", (e) => {
  // Close the navigation links
  navLinks.classList.remove("open");

  // Reset the menu button icon to the default state
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Configuration for ScrollReveal animation
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal animation for header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  interval: 500,
});

// ScrollReveal animation for about container
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// ScrollReveal animation for portfolio container
ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOption,
  interval: 500,
});

// ScrollReveal animation for news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Initialize Swiper for the 'swiper' container
const swiper = new Swiper(".swiper", {
  loop: true,
  slidePerView: "auto",
  spaceBetween: 30,
});
