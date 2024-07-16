document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Here you would normally send the form data to your server
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
