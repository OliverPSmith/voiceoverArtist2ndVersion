
/******** hidden nav bar on scroll */

const header = document.getElementById('header');
const hamburger = document.querySelector('.menu-toggle')


let newScrollPosition = 0;
let lastScrollPosition = 0;

window.addEventListener('scroll', e => {
    lastScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition && lastScrollPosition > 50) {
        header.classList.remove('slide-down');
        header.classList.add('slide-up');
        header.style.transition = "all 1s";
        hamburger.classList.remove('slide-down');
        hamburger.classList.add('slide-up');
        hamburger.style.transition = "all 1s";
    }   else if (newScrollPosition > lastScrollPosition) {
        header.classList.remove('slide-up');
        header.classList.add('slide-down');
        header.style.transition = "all .5s";
        hamburger.classList.remove('slide-up');
        hamburger.classList.add('slide-down');
        hamburger.style.transition = "all .5s";hamburger
    }

    newScrollPosition = lastScrollPosition;
});


/******** About Me - show more / less */

const dots = document.getElementById('dots');
const moreTxt = document.getElementById('more-text');
const moreTxtBtn = document.getElementById('more-text-button');

moreTxtBtn.addEventListener('click', () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreTxtBtn.innerHTML = "Show More";
        moreTxt.style.display = "none";
    }   else {
        dots.style.display = "none";
        moreTxtBtn.innerHTML = "Show Less";
        moreTxt.style.display = "inline";
    };
}); 


/************************** Menu Toggle */
// Toggle menu onClick

const body = document.querySelector('.body');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

hamburger.addEventListener('click', () => {
    body.classList.toggle('active');
    header.classList.toggle('active');
    hamburger.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            body.classList.remove('active');
            header.classList.remove('active');
            hamburger.classList.remove('active');
        })
    }
})