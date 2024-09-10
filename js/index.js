document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-slide');
    const indicatorContainer = document.querySelector('.carousel-indicators');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('#prevBtn');
    const nextButton = document.querySelector('#nextBtn');
    let visibleSlides = getVisibleSlides();
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Function to get the number of visible slides based on viewport
    function getVisibleSlides() {
        return window.innerWidth <= 768 ? 1 : 3; // 1 slide on mobile, 3 on desktop
    }

    // Function to create indicators
    function createIndicators() {
        indicatorContainer.innerHTML = ''; // Clear existing indicators
        const totalSlides = slides.length;
        const totalPages = Math.ceil(totalSlides / visibleSlides);
        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active'); // Set the first indicator as active
            indicatorContainer.appendChild(indicator);
        }
    }

    // Function to move to the correct slide
    function moveToSlide(index) {
        const offset = -(index * slideWidth);
        track.style.transform = `translateX(${offset}px)`;
    }

    // Function to update indicators based on the current index
    function updateIndicators() {
        const totalSlides = slides.length;
        const totalPages = Math.ceil(totalSlides / visibleSlides);
        const currentPage = Math.floor(currentIndex / visibleSlides);
        const indicators = document.querySelectorAll('.carousel-indicators .indicator');

        // Update the number of indicators
        if (indicators.length !== totalPages) {
            createIndicators();
        }

        // Update active state
        indicators.forEach((indicator, index) => {
            if (index === currentPage) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Next Button functionality
    nextButton.addEventListener('click', () => {
        const totalSlides = slides.length;
        const totalPages = Math.ceil(totalSlides / visibleSlides);
        if (currentIndex + visibleSlides < totalSlides) {
            currentIndex += visibleSlides;
        } else {
            currentIndex = 0; // Reset to the beginning
        }
        moveToSlide(currentIndex);
        updateIndicators();
    });

    // Previous Button functionality
    prevButton.addEventListener('click', () => {
        const totalSlides = slides.length;
        const totalPages = Math.ceil(totalSlides / visibleSlides);
        if (currentIndex - visibleSlides >= 0) {
            currentIndex -= visibleSlides;
        } else {
            currentIndex = (totalPages - 1) * visibleSlides; // Go to the end
        }
        moveToSlide(currentIndex);
        updateIndicators();
    });

    // Initialize carousel and indicators
    createIndicators();
    moveToSlide(currentIndex);
    updateIndicators();

    // Update carousel settings on window resize
    window.addEventListener('resize', () => {
        const newVisibleSlides = getVisibleSlides();
        if (newVisibleSlides !== visibleSlides) {
            visibleSlides = newVisibleSlides;
            slideWidth = slides[0].getBoundingClientRect().width;
            currentIndex = Math.min(currentIndex, slides.length - visibleSlides); // Adjust index if needed
            createIndicators();
            moveToSlide(currentIndex);
            updateIndicators();
        }
    });
});