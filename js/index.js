document.addEventListener('DOMContentLoaded', function() {
    // Set circular progress bars
    const circularProgressBars = document.querySelectorAll('.circular-progress');
    circularProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress * 3.6 + 'deg');
    });
});
