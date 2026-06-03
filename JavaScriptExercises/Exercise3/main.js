const events = [
    {
        name: "Music Fest",
        seats: 20,
        upcoming: true
    },

    {
        name: "Art Workshop",
        seats: 0,
        upcoming: true
    },

    {
        name: "Old Seminar",
        seats: 15,
        upcoming: false
    }
];

events.forEach(function(event) {

    if (event.upcoming && event.seats > 0) {

        console.log(event.name + " is available");

    } else {

        console.log(event.name + " is hidden");
    }
});

function register(event) {

    try {

        if (event.seats <= 0) {
            throw "No seats available";
        }

        event.seats--;

        console.log("Registration successful for " + event.name);

    } catch(error) {

        console.log("Error: " + error);
    }
}

register(events[0]);

register(events[1]);