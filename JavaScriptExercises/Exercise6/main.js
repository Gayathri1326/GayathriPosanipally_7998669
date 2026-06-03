const events = [];

// Add new events using push()
events.push(
    { name: "Music Fest", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" },
    { name: "Dance Night", category: "Music" },
    { name: "Tech Talk", category: "Tech" }
);

// Show all events
console.log("All Events:");
console.log(events);

// filter() → only music events
const musicEvents = events.filter(function(event) {
    return event.category === "Music";
});

console.log("Music Events:");
console.log(musicEvents);

// map() → format display
const formattedEvents = events.map(function(event) {
    return "Workshop on " + event.name;
});

console.log("Formatted Events:");
console.log(formattedEvents);