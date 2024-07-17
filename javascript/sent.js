// Function to show the thank you page and hide the contact form with a delay
function showThankYouPageWithDelay() {
  setTimeout(function() {
    document.getElementById('thankYouPage').style.display = 'block';
    document.getElementById('contactForm').style.display = 'none';
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Function to go to the home page
function goToHome() {
  window.location.href = '../../index.html'; // Replace with your home page URL
}

// Function to refresh the page to send another message
function sendAnotherMessage() {
  window.location.reload();
}

// Add event listener to the submit button to trigger the thank you page display with delay
document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission for demo purposes
  showThankYouPageWithDelay();
});