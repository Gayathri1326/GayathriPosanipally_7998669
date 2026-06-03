console.log("Fetching events...");

async function loadEvents() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        console.log("Events loaded (Async/Await):", data);

        document.getElementById("status").innerText =
            "Events loaded successfully (Async/Await)";

    } catch (error) {

        console.log("Error loading events:", error);

        document.getElementById("status").innerText =
            "Failed to load events";
    }
}

loadEvents();