document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-slide');
    const indicatorContainer = document.querySelector('.carousel-indicators');

    if (!track || !indicatorContainer) {
        console.error("Track or Indicator container not found");
        return;
    }

    const slides = Array.from(track.children);
    const prevButton = document.querySelector('#prevBtn');
    const nextButton = document.querySelector('#nextBtn');
    const visibleSlides = 3;  // Number of visible slides at a time
    const slideWidth = slides[0].getBoundingClientRect().width + 20;  // Add 20 for margin/padding if needed
    const totalSlides = slides.length;
    const totalPages = Math.ceil(totalSlides / visibleSlides);  // Calculate number of pages

    let currentIndex = 0;

    // Create indicators dynamically based on total pages
    const createIndicators = () => {
        indicatorContainer.innerHTML = '';  // Clear existing indicators
        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');  // Set the first indicator as active
            indicatorContainer.appendChild(indicator);
        }
    };

    createIndicators();

    const indicators = document.querySelectorAll('.carousel-indicators .indicator');

    // Function to move to the correct slide
    const moveToSlide = (index) => {
        const offset = -(index * slideWidth);
        track.style.transform = `translateX(${offset}px)`;
    };

    // Function to update indicators based on the current index
    const updateIndicators = () => {
        const currentPage = Math.floor(currentIndex / visibleSlides);
        indicators.forEach((indicator, index) => {
            if (index === currentPage) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };

    // Next Button functionality
    nextButton.addEventListener('click', () => {
        if (currentIndex + visibleSlides < totalSlides) {
            currentIndex += visibleSlides;
        } else {
            currentIndex = 0;  // Reset to the beginning
        }
        moveToSlide(currentIndex);
        updateIndicators();
    });

    // Previous Button functionality
    prevButton.addEventListener('click', () => {
        if (currentIndex - visibleSlides >= 0) {
            currentIndex -= visibleSlides;
        } else {
            currentIndex = (totalPages - 1) * visibleSlides;  // Go to the end
        }
        moveToSlide(currentIndex);
        updateIndicators();
    });

    // Initialize the carousel and indicators
    moveToSlide(currentIndex);
    updateIndicators();
});
