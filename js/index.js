document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('#carousel-slide');
    const skillElements = document.querySelectorAll('.skill');
    let counter = 0;
    let size = skillElements[0].offsetWidth; // Get initial size

    // Update size on window resize for responsiveness
    window.addEventListener('resize', () => {
        size = skillElements[0].offsetWidth;
    });

    function moveCarousel() {
        counter++;
        if (counter >= skillElements.length) {
            counter = 0; // Loop back to the first slide
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    // Automatically move the carousel every 3 seconds
    setInterval(moveCarousel, 3000);
});
