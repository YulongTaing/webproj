'use strict';

const addEventOnElement = (element, type, callback) => {
    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(type, callback);
        }
    }
    else{
        element.addEventListener(type, callback);
    }
}

/* navbar toggle */
const navbar = document.querySelector("[data-navbar]");
const navbarToggle = document.querySelectorAll("[data-navbar-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElement(navbarToggle, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNavbar);

/* header on 100px*/

const header = document.querySelector("[data-header]");

const activeElement = function() {
    if(window.scrollY > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}

//slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    // Stop the automatic sliding when the user hovers over the slider
    slider.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });

    // Resume automatic sliding when the user leaves the slider
    slider.addEventListener('mouseleave', function() {
        interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
    });
});



addEventOnElement(window, "scroll", activeElement);

//log and sign up functions 

function ToLoginPage() {
    window.location.href = "login.html";
}

function ToSignupPage() {
    window.location.href = "signup.html";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}