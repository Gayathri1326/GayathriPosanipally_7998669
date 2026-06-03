const container = document.querySelector("#eventContainer");

const eventCard = document.createElement("div");

eventCard.innerHTML = `
    <h2>Music Fest</h2>
    <button>Register</button>
`;

container.appendChild(eventCard);

eventCard.querySelector("button").onclick = function () {
    eventCard.innerHTML += "<p>Registered Successfully</p>";
};