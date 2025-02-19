// Handle the form submission and redirect to the success page
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if both fields are filled
    if (email && password) {
        // Redirect to the success page
        window.location.href = "success.html"; // Change the path if necessary
    } else {
        alert("Please fill in both fields.");
    }
}
