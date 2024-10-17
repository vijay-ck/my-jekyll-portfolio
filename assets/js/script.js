// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let lastScrollTop = 0; // Store the last scroll position
const header = document.querySelector('header'); // Select the header

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    if (scrollTop > lastScrollTop) {
        // If scrolling down, hide the header
        header.style.top = '-100px'; // Adjust this value as needed
    } else {
        // If scrolling up, show the header
        header.style.top = '0';
    }
    lastScrollTop = scrollTop; // Update last scroll position
});
