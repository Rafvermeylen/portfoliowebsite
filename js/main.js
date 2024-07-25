// Function to toggle the active class on the header based on scroll position
window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Function to handle click events on the hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('open');
});

// Add event listeners to all navigation links
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('#menu-toggle').checked = false;
        document.querySelector('nav ul').classList.remove('open');
    });
});
