// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message')
            };

            // Show loading state
            const submitButton = contactForm.querySelector('input[type="submit"]');
            const originalValue = submitButton.value;
            submitButton.value = 'Sending...';
            submitButton.disabled = true;
            formMessage.textContent = '';
            formMessage.style.color = '';

            try {
                // Send data to backend
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    formMessage.style.color = 'green';
                    contactForm.reset(); // Clear the form
                } else {
                    formMessage.textContent = result.message || 'Failed to send message. Please try again.';
                    formMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = 'Failed to send message. Please check your connection and try again.';
                formMessage.style.color = 'red';
            } finally {
                // Reset button state
                submitButton.value = originalValue;
                submitButton.disabled = false;
            }
        });
    }
});
