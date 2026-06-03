console.log("Modern JS Exercise Loaded");

// Array of events
const events = [
    {
        name: "Music Fest",
        category: "Music",
        seats: 20
    }
];

// 1. Default parameter
function showEvent(event = "No Event Provided") {
    console.log("Event:", event);
}

showEvent(); // uses default
showEvent("Community Meetup");

// 2. Destructuring
const { name, seats } = events[0];

console.log("Destructured Name:", name);
console.log("Destructured Seats:", seats);

// 3. Spread operator (clone array)
const clonedEvents = [...events];

console.log("Original Events:", events);
console.log("Cloned Events:", clonedEvents);

// Modify clone to prove it's separate
clonedEvents.push({
    name: "Tech Talk",
    category: "Tech",
    seats: 15
});

console.log("After adding to clone:");
console.log("Original:", events);
console.log("Clone:", clonedEvents);