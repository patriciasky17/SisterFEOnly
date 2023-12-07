// JavaScript to handle the responsive layout change
const header = document.querySelector('header nav .navigation-bar');
const mainNavbarMobile = document.createElement('div');
mainNavbarMobile.className = 'main-navbar-mobile';

// Function to toggle the dropdown content
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.classList.contains('hide')) {
        // If the dropdown content is hidden, show it
        dropdownContent.classList.remove('hide');
    } else {
        // If the dropdown content is shown, hide it
        dropdownContent.classList.add('hide');
    }
}

// For Hamburger Icon in Mobile

function changeIcon() {
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("x-icon");
    const hamburgerDisplay = getComputedStyle(hamburger).display;

    const navbar = document.querySelector(".main-navbar-mobile");

    if(hamburgerDisplay !== "none"){
        hamburger.style.display = "none";
        close.style.display = "block";
        navbar.classList.add("open");    
    } else {
        hamburger.style.display = "block";
        close.style.display = "none";
        navbar.classList.remove("open");    
    }
}

// For Modal

function editProfileModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.edit-profile-modal");
    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
}

function editProfileModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.edit-profile-modal");
    modalScreen.style.display = "none";
    editModal.style.display = "none";
}

function editPasswordModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.change-password-modal");
    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
}

function editPasswordModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.change-password-modal");
    modalScreen.style.display = "none";
    editModal.style.display = "none";
}


// To check whether the navbar has .login-register class or not

function checkForLoginRegisterClass() {
    // Find the header element
    var header = document.getElementById('header');

    // Check if there's any element with the class 'login-register' within the header
    var hasLoginRegister = header.querySelector('.login-register') !== null;

    // Return true if the class exists, false otherwise
    return hasLoginRegister;
}

// For Responsive

function handleResize() {
    if (window.innerWidth < 1000) {
        // Move the .navbar-link and .login-register elements to .main-navbar-mobile
        mainNavbarMobile.appendChild(document.querySelector('.navbar-links'));
        if (checkForLoginRegisterClass()) {
            mainNavbarMobile.appendChild(document.querySelector('.login-register'));
        }
        header.insertBefore(mainNavbarMobile, header.querySelector('.hamburger-icon'));
    } else {
        // Restore the original structure
        header.appendChild(document.querySelector('.navbar-links'));
        if (checkForLoginRegisterClass()) {
            header.appendChild(document.querySelector('.login-register'));
        }
        mainNavbarMobile.remove();
    }
}

// For navbar when scrolled down


const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

let selectHeader = select('#header')
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}

// Initial check on page load
handleResize();

// Listen for window resize events
window.addEventListener('resize', handleResize);
