console.log("Exercise 12 Loaded");

document.getElementById("regForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const form = event.target;

    const userData = {
        name: form.elements["name"].value,
        email: form.elements["email"].value
    };

    const msg = document.getElementById("msg");

    msg.innerText = "Submitting...";

    // simulate delayed response
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {

            console.log("Success:", data);

            msg.innerText = "Registration Successful!";
            msg.style.color = "green";
        })
        .catch(error => {

            console.log("Error:", error);

            msg.innerText = "Submission Failed!";
            msg.style.color = "red";
        });

    }, 2000);
});