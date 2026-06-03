const events = [];

function addEvent(name, category) {

    events.push({
        name: name,
        category: category
    });

    console.log(name + " added");
}

function registerUser(eventName) {

    console.log("User registered for " + eventName);
}

function filterEventsByCategory(category, callback) {

    const filtered = events.filter(function(event) {

        return event.category === category;
    });

    callback(filtered);
}

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        return totalRegistrations;
    };
}

const musicCounter = registrationTracker();

addEvent("Music Fest", "Music");

addEvent("Cooking Workshop", "Workshop");

registerUser("Music Fest");

console.log("Music Registrations: " + musicCounter());

console.log("Music Registrations: " + musicCounter());

filterEventsByCategory("Music", function(result) {

    console.log("Filtered Events:");

    console.log(result);
});