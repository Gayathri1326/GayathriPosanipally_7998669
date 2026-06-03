console.log("Form Script Loaded");

document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stop page reload

    const form = event.target;

    const username = form.elements["username"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    const errorMsg = document.getElementById("error");

    // validation
    if (username === "" || email === "" || selectedEvent === "") {
        errorMsg.innerText = "All fields are required!";
        return;
    }

    // simple email check
    if (!email.includes("@")) {
        errorMsg.innerText = "Enter a valid email!";
        return;
    }

    // success case
    errorMsg.style.color = "green";
    errorMsg.innerText = "Registration Successful!";

    console.log("User Registered:");
    console.log("Name:", username);
    console.log("Email:", email);
    console.log("Event:", selectedEvent);
});