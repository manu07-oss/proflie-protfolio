document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // You can add your code here to handle form submission, like sending an AJAX request
        
        alert('Message sent!'); // For demonstration, show an alert
        form.reset(); // Reset the form fields
    });
});
