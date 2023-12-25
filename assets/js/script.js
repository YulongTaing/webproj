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

addEventOnElement(window, "scroll", activeElement);

function ToLoginPage() {
    window.location.href = "login.html";
}

function ToSignupPage() {
    window.location.href = "signup.html";
}