// Simple form validation and success message display
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if the fields are filled
    if(name && email && message) {
        alert('Thank you, ' + name + '. Your message has been sent!');
    } else {
        alert('Please fill all the fields.');
    }

    // Optionally clear the form
    this.reset();
});
