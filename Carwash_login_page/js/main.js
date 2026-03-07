// Select the modal element
var modal = document.querySelector('#error-modal');
var loginForm = document.querySelector("#login-form");

// Handle Form Submission
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page refresh
        validateLogin();
    });
}

function validateLogin() {
    var uname = document.querySelector("#uname").value;
    var pwd = document.querySelector("#pwd").value;

    // Check credentials: Both must match perfectly
    if (uname === "Admin" && pwd === "123456") {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        // Show the error modal
        modal.style.display = "block";
    }
}

// Function to close the modal
function dismissModal() {
    modal.style.display = "none";
}