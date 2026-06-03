console.log("Debugging Exercise Loaded");

document.getElementById("form").addEventListener("submit", function(event) {

    console.log("Form submit triggered");

    event.preventDefault();

    const form = event.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;

    console.log("Captured Values:");
    console.log("Name:", name);
    console.log("Email:", email);

    const status = document.getElementById("status");

    // Debug check 1
    if (!name || !email) {
        console.log("Validation failed: empty fields");
        status.innerText = "Please fill all fields";
        status.style.color = "red";
        return;
    }

    // Debug check 2
    if (!email.includes("@")) {
        console.log("Validation failed: invalid email");
        status.innerText = "Invalid email format";
        status.style.color = "red";
        return;
    }

    console.log("Validation passed");

    status.innerText = "Registration Successful!";
    status.style.color = "green";

    console.log("Success: User registered");
});