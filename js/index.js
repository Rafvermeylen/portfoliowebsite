document.addEventListener('DOMContentLoaded', function() {
    // Set circular progress bars
    const circularProgressBars = document.querySelectorAll('.circular-progress');
    circularProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress * 3.6 + 'deg');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop().split(".")[0]; // Gets the current page name without extension
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});
