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

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-slide');
    if (!track) {
        console.error("No element found with the class '.carousel-slide'");
        return;
    }
    console.log("track: ", track)

    const slides = Array.from(track.children);
    console.log(Array.from(track.children));
    const prevButton = document.querySelector('#prevBtn');
    const nextButton = document.querySelector('#nextBtn');
    const visibleSlides = 3; // Number of visible slides
    const slideWidth = slides[0].getBoundingClientRect().width;
    const totalSlides = slides.length;
    const maxIndex = totalSlides - visibleSlides;

    let currentIndex = 0;
    console.log('children:', slides);

    // Function to move the track to the correct position
    const moveToSlide = (index) => {
        const offset = -(index * slideWidth);
        console.log('Moving to slide:', index, 'Offset:', offset);
        track.style.transform = `translateX(${offset}px)`;
    };

    // Previous Button functionality
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveToSlide(currentIndex);
            console.log('Prev Button Clicked, Current Index:', currentIndex);
        } else {
            console.log('Already at the first slide');
        }
    });

    // Next Button functionality
    nextButton.addEventListener('click', () => {
        // Adjusted logic: Ensure currentIndex is below maxIndex
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveToSlide(currentIndex);
            console.log('Next Button Clicked, Current Index:', currentIndex);
        } else {
            console.log('Already at the last slide');
        }
    });

    // Arrow Key Controls
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevButton.click();
        } else if (event.key === 'ArrowRight') {
            nextButton.click();
        }
    });

    // Initialize position
    moveToSlide(currentIndex);
});
